---
id: lem-weak-local-subharmonic-peak-function-implies-regularity
kind: lemma
title: "A weak local subharmonic peak function upgrades to regularity"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-local-subharmonic-peak-function-globalizes, thm-barrier-characterization-of-regular-boundary-points]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Harold P. Boas, Class Notes Math 618: Complex Variables II, Spring 2016"
      url: "https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a bounded complex domain and let
$\zeta\in\partial\Omega$. Suppose there are a neighbourhood $U$ of $\zeta$ and a
subharmonic function $q$ on $\Omega\cap U$ such that:

1. $q(z)<0$ on $\Omega\cap U$;
2. $q(z)\to0$ as $z\to\zeta$ with $z\in\Omega$;
3. writing
   $$q^\partial(\eta):=\limsup_{\substack{z\to\eta\\z\in\Omega\cap U}}q(z)\qquad(\eta\in\overline{\Omega\cap U}),$$
   every compact set
   $K\subseteq(\overline{\Omega\cap U})\setminus\{\zeta\}$ satisfies
   $\sup_{\eta\in K}q^\partial(\eta)<0$.

Then $\zeta$ is regular for $\Omega$.

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$, a boundary point $\zeta$, and local data $U$ and $q$ as in the Statement.

[L1] A local strict peak function globalizes to a global barrier ([[lem-local-subharmonic-peak-function-globalizes]]).

[L2] A boundary point is regular exactly when it admits a barrier ([[thm-barrier-characterization-of-regular-boundary-points]]).

## Proof

**Proof technique:** direct.

1.1 Choose a smaller neighbourhood $W\Subset U$ of $\zeta$. The compact seam $(\overline{\Omega\cap W})\cap\partial W$ is a compact subset of $(\overline{\Omega\cap U})\setminus\{\zeta\}$, so hypothesis 3 gives [given, choose]
$$\sup_{\eta\in(\overline{\Omega\cap W})\cap\partial W}q^\partial(\eta)<0.$$
Thus $q$ is already a local strict peak function on $\Omega\cap W$. [given, choose]

2.1 Applying [L1] to the restricted data on $W$ yields a global barrier at $\zeta$. Then [L2] shows that $\zeta$ is regular. [L1, L2, step 1.1] ∎
