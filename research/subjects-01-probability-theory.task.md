# subjects-01 — `probability-theory`

**You are an expert of probability theory.**

| | |
|---|---|
| track | `probability-theory` |
| wave | 3 |
| file you own | `research/plan-probability-track.md` (**NEW**) |
| placement anchor | `functional-analysis`'s last page |
| sibling tracks to read first | `research/plan-measure-theory-track.md` (the finished `measure-theory` track) |

This file does not exist yet. You create it, and you are its only writer.

---

## Your remit — what you mint

- probability spaces as measure spaces, random variables as measurable functions, distributions and distribution functions, expectation as the integral, the change-of-variables formula
- independence, π-systems and independence criteria, the Borel–Cantelli lemmas, Kolmogorov's zero–one law, the tail σ-algebra
- the classical inequalities in their measure-theoretic form: Markov, Chebyshev, Jensen, Cauchy–Schwarz, Hölder for random variables
- modes of convergence — a.s., in probability, in L^p, in distribution — and the complete implication diagram with counterexamples
- laws of large numbers: the weak law, Kolmogorov's strong law, the three-series theorem
- weak convergence and tightness, Prokhorov's theorem, the portmanteau theorem, Skorokhod representation
- characteristic functions, Lévy's continuity theorem, inversion, and the **central limit theorem** — Lindeberg–Feller and the classical case
- **Kolmogorov extension theorem and infinite product measures** — you own these, not `measure-theory`, because the independence structure is yours
- conditional expectation via Radon–Nikodym, conditional distributions, regular conditional probability
- martingales in discrete time: optional stopping, the martingale convergence theorems, Doob's inequalities, uniform integrability
- Markov chains: transition kernels, recurrence and transience, stationary distributions, ergodic theory for chains
- Brownian motion: construction, continuity, the Markov and strong Markov properties, basic path properties; stochastic integration only if you can source it fully

## What you must NOT mint — cite it instead

- **`measure-theory` owns everything measure-theoretic** — σ-algebras, the integral, MCT/Fatou/DCT, L^p entire, Fubini for finite products, Radon–Nikodym, and the Birkhoff and von Neumann ergodic theorems. Read its finished file and cite its ids. Conditional expectation is yours but rests on its Radon–Nikodym.
- **`combinatorics` owns finite probability and the probabilistic method** — `finite-probability-spaces-and-random-variables` (220.2, 37 items) and `finite-probability-and-the-probabilistic-method` (221, 28 items) are AUTHORED. Do not rebuild finite probability. Read both, cite them, and state explicitly where the σ-additive theory subsumes the finite one and where the finite page's definitions are reused unchanged.
- the ergodic theorems are `measure-theory`'s; you cite them for stationary sequences and Markov chains.
- weak convergence lives on metric spaces — the published topology band (116–120, 249–283) supplies what you need.

## Verified from disk by the orchestrator, 2026-08-13

- Probability in the library is **finite only** today. The two authored pages above use finite sample spaces throughout. Your first structural decision is how the σ-additive definitions relate to theirs: whether the finite page's `def-` items are special cases you cite, or whether you mint general definitions that supersede them. Decide explicitly, justify it, and record it as an amendment if it touches their pages.
- Definitional probes found 10 published items matching "probability space" and 30 matching "random variable" — all on the two finite pages. Read them before minting anything.
- The classical inequalities (Markov, Chebyshev, Cauchy–Schwarz, second-moment) already appear in the finite setting on the 220.2/221 pages. Your versions must extend rather than duplicate — check the exact published statements and say which generalise and how.

## Source research

Durrett *Probability: Theory and Examples* (author-hosted, free) is an excellent open primary with a harvestable table of contents. Billingsley *Probability and Measure*, Williams *Probability with Martingales*, Kallenberg *Foundations of Modern Probability*, Klenke *Probability Theory* and Varadhan's lecture notes are the standard references.

These are **starting points, not a reading list to accept on trust**. Verify what
is actually reachable, obtain the full text of at least two standard textbooks in
probability theory, gather a rich corpus of lecture notes and other open-web sources,
and run the canonical-coverage harvest over the exact chapter ranges you read.
Where two sources disagree on a convention, record the disagreement and say which
the library adopts and why.

---

## Reminders that cost previous runs real time

- **`items[]` in `research/plan-spec.json` is the only honest signal** of what
  exists. A page with an empty `items` array is a plan, not a library page.
- **Absolute orders in the existing scaffold files are stale.** Use relative
  labels and page ids; the orchestrator computes orders at splice.
- **Check an id before coining it** — `ls items/ | grep -i '<name>'`. Ids are
  immutable on `main` and the unqualified name is often already taken by another
  category.
- **Never ask for a permission, and never let a subagent ask.** Record a blocker
  instead. You already hold every permission you need.
- **Write only the file you own.** Everything else goes in "Amendments owed".
