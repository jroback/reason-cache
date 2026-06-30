# Product Journal

This document captures the evolution of the product, major architectural decisions, product discoveries, open questions, and lessons learned as we build.

The goal isn't documentation.

The goal is to preserve our thinking.

---

# Session 1 — Project Setup

## What We Built

- Created the development environment using GitHub Codespaces.
- Initialized the Next.js project.
- Connected Git and GitHub.
- Established our initial project structure.

## Engineering Lessons

- A clean Git history is part of the product.
- Every project should start with a README.
- Learn to inspect before fixing (`pwd`, `ls`, `git status`).
- Professional development is mostly understanding your environment.

## Product Discoveries

- Initial concept: marketplace for reusable AI reasoning.
- Began exploring the idea of secondhand compute.

---

# Session 2 — The First Prototype

## What We Built

- Replaced the default Next.js page.
- Created the first homepage.
- Built reusable React components.
- Introduced React state with an interactive search experience.
- Separated UI, copy, and data into independent folders.

## Architecture Decisions

Current structure:

app/
components/
copy/
data/

Each directory owns one responsibility.

## Product Discoveries

### Biggest Insight

Users don't buy prompts.

Users buy solved work.

---

The marketplace is not for prompts.

It's for reusable intelligence.

---

Thinking shifted from:

ReasonCache

↓

Secondhand Compute

↓

Regenerative Intelligence

---

Potential positioning:

Generative AI creates.

Regenerative Intelligence compounds.

Rather than repeatedly generating the same knowledge, intelligence should become reusable, searchable, and regenerative.

## Open Questions

- Is "Regenerative Intelligence" the category?
- Is there a stronger metaphor than caching?
- Should users think in terms of libraries, marketplaces, electricity, or another mental model?
- Why would someone contribute intelligence back into the marketplace?
- Which intelligence should be regenerative, and which should remain private?

## Product Principles

Every solved problem should make the next user faster.

Every file should have one responsibility.

Optimize for understanding before optimization.

Build the experience before the infrastructure.

## Parking Lot

Ideas that feel important but don't need to be solved today.

- Regenerative Intelligence
- Marketplace incentives
- Time-sensitive intelligence
- Public vs. private reasoning
- AI economics