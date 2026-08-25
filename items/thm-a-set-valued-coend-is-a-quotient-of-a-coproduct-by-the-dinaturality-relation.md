---
id: thm-a-set-valued-coend-is-a-quotient-of-a-coproduct-by-the-dinaturality-relation
kind: theorem
title: "A set-valued coend is the disjoint union of the diagonal values modulo the dinaturality relation"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-an-end-is-an-equalizer-between-two-products, def-end-and-coend, thm-set-has-all-small-colimits, prop-sets-and-functions-form-category-set, def-equivalence-relation, def-small-locally-small-and-large-category, def-products-and-coproducts, def-equalizers-and-coequalizers]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remark 1.2.4"
      url: "https://arxiv.org/pdf/1501.02503"
    - title: "E. Riehl, Categorical Homotopy Theory, (7.1.6)"
      url: "https://emilyriehl.github.io/files/cathtpy.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a small category
([[def-small-locally-small-and-large-category]]) and let
$T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$ be a functor
([[prop-sets-and-functions-form-category-set]]). Write

$$\textstyle\coprod_{c}T(c,c)=\{(c,x):c\in\operatorname{Ob}(\mathcal C),\ x\in T(c,c)\}$$

for the disjoint union of the diagonal values, and let $\sim$ be the least
equivalence relation on it ([[def-equivalence-relation]]) containing

$$\bigl(c,\;T(f,1_c)(x)\bigr)\;\sim\;\bigl(c',\;T(1_{c'},f)(x)\bigr)\qquad\text{for every }f:c\to c'\text{ and every }x\in T(c',c).$$

Then $T$ has a coend, and it is the disjoint union of the diagonal values
modulo the dinaturality relation ([[def-end-and-coend]]):

$$\int^{c}T(c,c)=\Bigl(\textstyle\coprod_{c}T(c,c)\Bigr)\Big/{\sim},\qquad \rho_c(x)=[(c,x)].$$

Both generating elements are named with their summands: the pair is generated
by an element $x$ of the **off-diagonal** value $T(c',c)$, pushed into the
summand at $c$ by $T(f,1_c)$ and into the summand at $c'$ by $T(1_{c'},f)$.

## Facts & Assumptions

**Given:** A small category $\mathcal C$ and a functor $T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathbf{Set}$.

[F1] Sets as objects and functions as morphisms form a large locally small category $\mathbf{Set}$ ([[prop-sets-and-functions-form-category-set]]).

[F4] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[L2] Every small diagram $D:\mathcal J\to\mathbf{Set}$ has a colimit; it is the quotient of the tagged union $S=\{(j,x):x\in D(j)\}$ by the least equivalence relation containing $(j,x)\sim(k,D(u)(x))$ for $u:j\to k$ ([[thm-set-has-all-small-colimits]]).

[F5] The coproduct of an indexed family regarded as a diagram on the discrete category $I$ is its colimit, with injections $\iota_i$ through which every family $f_i:A_i\to X$ factors by a unique copairing ([[def-products-and-coproducts]]).

[L1] For a small $\mathcal C$ whose displayed coproducts exist, a coend is the coequalizer of two maps between coproducts, namely of the two morphisms determined on the $f$-summand by $T(f,1_c)$ into the summand at $c$ and by $T(1_{c'},f)$ into the summand at $c'$, the $f$-summand being $T(c',c)$ ([[thm-an-end-is-an-equalizer-between-two-products]]).

[F6] A coequalizer of $g,h:A\rightrightarrows B$ is a morphism $q:B\to Q$ satisfying $qg=qh$ such that, whenever $k:B\to X$ satisfies $kg=kh$, there is a unique $u:Q\to X$ with $uq=k$ ([[def-equalizers-and-coequalizers]]).

[F2] A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive on $A$, symmetric and transitive; the quotient set $A/{\sim}$ is the set of equivalence classes and the quotient map $\pi(a)=[a]$ is surjective ([[def-equivalence-relation]]).

[F3] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal C$ is small, the objects and the morphisms of $\mathcal C$ form sets, so both families in question are set-indexed. A coproduct is a colimit of a discrete diagram, and on a discrete index category the only morphisms are identities, so the least equivalence relation of [L2] is equality and the colimit is the tagged union itself. Hence $\coprod_cT(c,c)$ and $\coprod_{f:c\to c'}T(c',c)$ exist in $\mathbf{Set}$ and are the displayed disjoint unions. [F1, F4, F5, L2]

2.1 By [L1] the coend of $T$ is the coequalizer, if it exists, of the two functions $\Lambda,\mathrm P:\coprod_{f:c\to c'}T(c',c)\to\coprod_cT(c,c)$ given on the summand at $f:c\to c'$ by $\Lambda(f,x)=(c,T(f,1_c)(x))$ and $\mathrm P(f,x)=(c',T(1_{c'},f)(x))$, where $x$ ranges over $T(c',c)$. [F3, L1, step 1.1]

3.1 The quotient map $q:\coprod_cT(c,c)\to(\coprod_cT(c,c))/{\sim}$ coequalises $\Lambda$ and $\mathrm P$, because every pair $(\Lambda(f,x),\mathrm P(f,x))$ is one of the generating pairs of $\sim$. If $k$ is a function on $\coprod_cT(c,c)$ with $k\Lambda=k\mathrm P$, then $\{(s,t):k(s)=k(t)\}$ is an equivalence relation containing every generating pair, so it contains $\sim$; hence $k$ is constant on classes and factors as $k=\bar kq$ for a unique $\bar k$, uniqueness because $q$ is surjective. So $q$ is a coequalizer of $\Lambda$ and $\mathrm P$. [F2, F6, step 2.1]

4.1 Therefore the coequalizer of step 2.1 exists, and by [L1] and [F3] the coend of $T$ is the quotient set of step 3.1, with the initial cowedge given by $\rho_c(x)=[(c,x)]$. [F3, L1, step 3.1] ∎

## Remarks

The source of a generating pair is the off-diagonal value $T(c',c)$, indexed by $f:c\to c'$ running the other way; this is the same swap that appears in the description of a coend as a colimit over $\operatorname{Tw}(\mathcal C)^{\mathrm{op}}$ ([[thm-an-end-is-a-limit-over-the-twisted-arrow-category]]). If $T(c',c)$ is empty for some pair, that summand contributes no generating pair at all, and the corresponding identifications simply do not happen.

Identity morphisms contribute nothing: at $f=1_c$ both $T(1_c,1_c)$ are the identity of $T(c,c)$ and the generating pair is $((c,x),(c,x))$, which every equivalence relation contains already.
