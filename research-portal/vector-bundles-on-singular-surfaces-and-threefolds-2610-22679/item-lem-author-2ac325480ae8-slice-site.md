---
title: The actual big cdh slice over a field
status: draft
research_item: lem-author-2ac325480ae8-slice-site
dependency_level: 7
---

PDF p. 6: Singular Beilinson–Lichtenbaum comparison

## Prerequisites

- [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification)
- [thm-author-2ac325480ae8-bem-finite-comparison](item-thm-author-2ac325480ae8-bem-finite-comparison)

## Statement
Assume AC and compatible universe bounds. Fix a prime $p$, $S=\operatorname{Spec}\mathbb Z[1/p]$, and let $\mathcal C=\mathrm{Sch}^{\rm qcqs}_S$ with BEM’s big cdh topology: finite Nisnevich covers and finitely presented abstract blowup covers generate it. For a field $k$ with $p$ invertible, put $U=\operatorname{Spec}k$. The slice $\mathcal C/U$ is exactly the category of qcqs $k$-schemes with the restricted BEM big cdh topology. The covering sieves of an object $(V,f)$ correspond to the covering sieves of $V$ in $\mathcal C$. For presheaves with values in $D(\mathbb Z)$, both restriction $j^*$ along $j:\mathcal C/U\to\mathcal C$ and the functor $j_*Q(V)=Q(V\times_S U\to U)$ preserve cdh sheaves.

## Facts & Assumptions
[F1] [thm-author-2ac325480ae8-bem-finite-comparison](item-thm-author-2ac325480ae8-bem-finite-comparison) specifies BEM’s big site and cover generators. [def-scheme-sites-and-sheafification](item-def-scheme-sites-and-sheafification) fixes the size convention and meaning of a site. All schemes and necessary products lie in the chosen enlarged universe.

[F2] A complex-valued sheaf here means a presheaf satisfying derived Čech descent for every covering family (limits in $D(\mathbb Z)$); $L_{\mathcal C}$ below is its reflective sheafification. These are BEM’s ordinary sheaf conventions, not an unasserted identification with the separately fixed hypercomplete finite-type site.

## Proof
**Given:** $S,k,U,\mathcal C$ as stated.

**Goal:** Identify the slice site and prove both descent-preservation assertions.

1.1 A map $V\to U$ in $\mathcal C$ is precisely a qcqs $k$-scheme. Every arrow $W\to V$ acquires the unique structure map $W\to V\to U$, and any composite into $(V,f)$ remains over $U$. Thus $(\mathcal C/U)/(V,f)\cong\mathcal C/V$, identifying their sieves. Each Nisnevich or abstract blowup covering of $V$ has this unique lift over $U$; conversely forgetting a lifted generator gives such a generator. The generated topologies therefore agree under that identification. This establishes the asserted big-site convention. [F1, construct]

2.1 A sheaf $P$ on $\mathcal C$ satisfies descent for each covering Čech diagram over $V$. That same diagram is the underlying diagram for a cover of $(V,f)$, so $j^*P$ is a sheaf. For a sheaf $Q$ on the slice, a cover of $V$ pulls back to a cover of $V\times_SU$, with its Čech nerve equal to the pulled-back nerve. Evaluating $Q$ on this nerve proves descent for $j_*Q$. Both functors are the displayed actual functors; this does not compare with the older separated finite-type site. [F1, F2, step 1.1] ∎
