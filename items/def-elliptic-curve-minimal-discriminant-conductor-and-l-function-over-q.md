---
id: def-elliptic-curve-minimal-discriminant-conductor-and-l-function-over-q
kind: definition
title: Minimal discriminant, conductor and Hasse–Weil L-function of an elliptic curve over Q
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-elliptic-q-integral-weierstrass-and-finitely-many-bad-primes
  - def-abelian-variety-over-a-field
  - def-weierstrass-model-and-discriminant-invariants
  - def-good-reduction-and-abelian-scheme-model
  - def-neron-model-and-mapping-property
  - thm-neron-model-existence-in-stated-class
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: J. S. Milne, Elliptic Curves, Chapter II §§2–3, §7 and Chapter IV §10.5
      url: https://www.jmilne.org/math/Books/ectext6.pdf
      locator: Chapter II §§2–3 and §7, printed pp. 76–80, generalized equations and the distinction between complete minimal regular and smooth Néron models; Chapter IV §10.5, local Euler factors and the Ogg conductor convention.
    - title: Héctor Pasten, Shimura Curves and the abc Conjecture
      url: https://people.math.harvard.edu/~hpasten/preprints/ShABC.pdf
      locator: §1.1 and §3, the Frey–Hellegouarch curve, discriminant/conductor comparison and exact scope of the comparison.
---

## Definition

Assume the original Axiom of Choice and Dependent Choice conventions. Let $E/\mathbb Q$ be an elliptic curve. For each rational prime $p$, let $\mathbb Z_p$ be the valuation ring of $\mathbb Q_p$, let $v_p(p)=1$, and consider all generalized Weierstrass equations for $E_{\mathbb Q_p}$ whose coefficients lie in $\mathbb Z_p$. Let $\delta_p(E)$ be the least value of $v_p(\Delta_W)$ among those integral equations. The positive minimal discriminant is
$$|\Delta_{\min}(E)|=\prod_p p^{\delta_p(E)}.$$

Let $\mathcal E_p^{\mathrm{reg}}$ denote the minimal proper regular model of $E_{\mathbb Q_p}$ over $\mathbb Z_p$: a proper flat regular model with this generic fibre, minimal under proper birational contractions of regular models. Let $m_p(E)$ be the number of irreducible components of its geometric special fibre, each counted once, including components whose fibre multiplicity exceeds one. This is the proper regular model, not the smooth Néron group model, whose special fibre omits those multiple components. Existence and the conductor comparison are prerequisites recorded below, not consequences of the smooth Néron-model interface. The reduction is **good** when the special fibre of a minimal Weierstrass model is smooth, **multiplicative** when it is nodal, and **additive** when it is singular and not nodal. Multiplicative reduction is **split** when the two tangent directions at the node are rational over $\mathbb F_p$, and **nonsplit** otherwise. Define the conductor exponent by
$$f_p(E)=\begin{cases}0,&\text{good reduction},\\1,&\text{multiplicative reduction},\\v_p(\Delta_{\min}(E))+1-m_p(E),&\text{additive reduction},\end{cases}$$
and the conductor by $N_E=\prod_p p^{f_p(E)}$. The additive case uses Ogg's conductor formula, including at $p=2,3$.

For a prime $p$, set
$$L_p(E,T)=\begin{cases}1-a_pT+pT^2,&\text{good reduction},\quad a_p=p+1-\#E(\mathbb F_p),\\1-T,&\text{split multiplicative reduction},\\1+T,&\text{nonsplit multiplicative reduction},\\1,&\text{additive reduction}. \end{cases}$$
The Hasse–Weil L-function is the Euler product
$$L(E,s)=\prod_p L_p(E,p^{-s})^{-1}$$
in its half-plane of absolute convergence, in particular for $\operatorname{Re}(s)>3/2$.

## Definition references

[[def-abelian-variety-over-a-field]]

[[def-weierstrass-model-and-discriminant-invariants]]

[[def-good-reduction-and-abelian-scheme-model]]

[[def-neron-model-and-mapping-property]]

[[thm-neron-model-existence-in-stated-class]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, Dependent Choice, and an elliptic curve $E/\mathbb Q$.

[A1] The original AC and DC hypotheses are retained. The smooth Néron-model existence interface has this scope but does not construct the minimal proper regular model used in $m_p(E)$. ([[def-axiom-of-choice]], [[def-dependent-choice]], [[thm-neron-model-existence-in-stated-class]])

[F1] The library's Néron model is smooth, separated and finite type with the Néron mapping property; it is therefore a different model notion from the proper regular model in the conductor formula. ([[def-neron-model-and-mapping-property]])

[F2] Over a discrete valuation ring, a generalized Weierstrass equation is integral when all five coefficients lie in the valuation ring. ([[def-weierstrass-model-and-discriminant-invariants]])

[F3] Every elliptic curve over $\mathbb Q$ has a global integral Weierstrass equation and good reduction outside a finite set; its integral local equations exist and their least discriminant valuations define a finite product. [[lem-elliptic-q-integral-weierstrass-and-finitely-many-bad-primes]]

## Unresolved prerequisites

- Existence and uniqueness of the minimal proper regular model over each $\mathbb Z_p$, and a local proof of Ogg's conductor formula in all residue characteristics, including $p=2,3$, counting every geometric component of that proper model once. Smooth Néron-model existence alone supplies neither assertion.
- The Hasse bound $|a_p|\le2\sqrt p$ for good reduction, needed for the asserted absolute convergence of the Euler product for $\operatorname{Re}(s)>3/2$.

These are genuine prerequisites for the displayed definitions and analytic domain. They are recorded for owner reconciliation; this carrier does not claim their proof or current local acceptance.
