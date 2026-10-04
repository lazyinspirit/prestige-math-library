---
id: thm-zero-free-inner-functions-are-singular-inner
kind: theorem
title: "Zero-free inner functions are unimodular multiples of singular inner functions"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-inner-singular-inner-and-outer-functions, def-analytic-hardy-space-disc, thm-singular-inner-function-properties, thm-harnack-convergence-positive-harmonic-functions, thm-harmonic-conjugate-on-homologically-simply-connected-domains, prop-star-shaped-plane-domains-are-homologically-simply-connected, def-measure-concentrated-on-a-measurable-set, def-blaschke-product, thm-hardy-zero-set-blaschke-condition, thm-blaschke-product-boundary-values-and-zeros, thm-riesz-factorization-hardy-space, thm-fatou-boundary-theorem-analytic-hardy-spaces, thm-local-maximum-modulus-principle, def-countable-choice, def-axiom-of-choice, def-plane-harmonic-function, thm-holomorphic-logarithms-homologically-simply-connected-domains, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-c2-holomorphic-components-are-harmonic]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §6"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed pp. 74-76: every inner function is a unimodular constant times a Blaschke product times a singular function, via the Herglotz representation of $-\\log|S|$."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.10"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Theorem 5.32 and its corollaries, printed pp. 46-47: the canonical factorisation of inner functions."
---

## Statement

Assume the Axiom of Choice. Let $S$ be holomorphic and zero-free on $\mathbb D$ with $|S|\le1$, and suppose
that its boundary function satisfies $|S^*|=1$ $m$-almost everywhere
(equivalently, $S$ is an inner function without zeros). Then there are a unique
$\lambda\in\mathbb T$ and a unique finite positive measure $\mu\perp m$ with
$$S=\lambda\,S_\mu,\qquad S_\mu(z)=\exp\Bigl(-\int_{\mathbb T}K(z,\zeta)\,d\mu(\zeta)\Bigr).$$
With the normalizations $S_\mu(0)=e^{-\mu(\mathbb T)}>0$ and
$\lambda=S(0)/S_\mu(0)$, the pair $(\lambda,\mu)$ is unique. In particular
$S_\mu$ is the singular inner function of $\mu$, and every inner function is,
up to a unimodular constant, the product of a Blaschke product and a singular
inner function.

## Facts & Assumptions

**Given:** The Axiom of Choice, hence countable choice ([[def-axiom-of-choice]], [[def-countable-choice]]); a zero-free holomorphic $S$ on $\mathbb D$ with $|S|\le1$ and $|S^*|=1$ $m$-almost everywhere; and, where asserted, an inner function $\theta$.

[L1] $S$ zero-free means $\log|S|$ is harmonic on $\mathbb D$, so $u:=-\log|S|=-\operatorname{Re}\log S$ is a nonnegative harmonic function with $u(0)=-\log|S(0)|<+\infty$; the kernel $K(z,\zeta)=(\zeta+z)/(\zeta-z)$ is holomorphic in $z$ with $\operatorname{Re}K=P$ ([[thm-holomorphic-logarithms-homologically-simply-connected-domains]], [[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[thm-c2-holomorphic-components-are-harmonic]], [[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[def-inner-singular-inner-and-outer-functions]], [[def-plane-harmonic-function]]).

[L2] Herglotz representation: every nonnegative harmonic $u$ on $\mathbb D$ is $u=P[\mu]$ for a unique finite nonnegative regular Borel measure $\mu$ with $\mu(\mathbb T)=u(0)$, and conversely $P[\mu]$ is nonnegative harmonic ([[thm-harnack-convergence-positive-harmonic-functions]]).

[L3] The functions $H(z):=\int_{\mathbb T}K(z,\zeta)\,d\mu(\zeta)$ are holomorphic on $\mathbb D$ with $\operatorname{Re}H=P[\mu]$, and $S_\mu=e^{-H}$ is holomorphic, zero-free, with $|S_\mu|=e^{-P[\mu]}$ and $S_\mu(0)=e^{-\mu(\mathbb T)}$; $S_\mu$ is a singular inner function exactly when $\mu\perp m$ ([[thm-singular-inner-function-properties]], [[def-inner-singular-inner-and-outer-functions]]).

[L4] Maximum modulus: a holomorphic function on a domain with constant modulus is constant; a holomorphic function on a domain whose modulus has an interior maximum is constant ([[thm-local-maximum-modulus-principle]]).

[L5] For $\theta\in H^\infty$ with $|\theta^*|=1$ a.e. (an inner function), one has $|\theta|\le1$ on $\mathbb D$ and $\|\theta\|_\infty=1$, by the boundary-norm identity of the Fatou theorem for analytic $H^\infty$; the zero sequence of $\theta$ satisfies the Blaschke condition, and $\theta/B$ for the Blaschke product of its zeros is holomorphic and zero-free with nontangential boundary modulus $1$ a.e., while its modulus is bounded by $1$ by the maximum principle on expanding discs $|z|<R$ with $|B_N(R\zeta)|\to1$ ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]], [[thm-hardy-zero-set-blaschke-condition]], [[thm-blaschke-product-boundary-values-and-zeros]], [[thm-riesz-factorization-hardy-space]], [[def-blaschke-product]], [[thm-local-maximum-modulus-principle]]).



## Proof

**Proof technique:** direct.

1.1 The measure of the modulus. By [L1] the function $u=-\log|S|$ is nonnegative harmonic with $u(0)<+\infty$, so [L2] provides a unique finite nonnegative regular Borel measure $\mu$ with $u=P[\mu]$, $\mu(\mathbb T)=u(0)$. [given, L1, L2]

2.1 $S$ is a unimodular constant times $S_\mu$. Let $H$ be the holomorphic function with $\operatorname{Re}H=P[\mu]=u$ from [L3]. Then $$\bigl|S(z)e^{H(z)}\bigr|=|S(z)|e^{\operatorname{Re}H(z)}=e^{-u(z)}e^{u(z)}=1\qquad(z\in\mathbb D),$$ so the holomorphic function $Se^{H}$ has constant modulus $1$; by [L4] it is a constant $\lambda$ with $|\lambda|=1$, that is, $S=\lambda e^{-H}=\lambda S_\mu$. [step 1.1, L3, L4, algebra]

3.1 Singularity of $\mu$. Since $|S^*|=1$ a.e. and $|\lambda|=1$, the relation $S=\lambda S_\mu$ passes to the a.e. boundary values: $|S_\mu^*|=1$ a.e. By the equivalence of [L3], this forces $\mu\perp m$. [step 2.1, L3, algebra]

4.1 Uniqueness. If $S=\lambda S_\mu=\lambda' S_{\mu'}$ with unimodular $\lambda,\lambda'$ and finite positive $\mu,\mu'\perp m$, then taking moduli gives $\log|S|=-P[\mu]=-P[\mu']$, so $P[\mu]=P[\mu']$ and the uniqueness clause of the Herglotz representation [L2] gives $\mu=\mu'$; then $\lambda=S(0)/S_\mu(0)=\lambda'$. [step 2.1, step 3.1, L2, L3, algebra]

4.2 Every inner function factors. Let $\theta$ be an inner function. The inner function cannot be identically zero, because its boundary modulus is $1$ almost everywhere. Let $(a_n)$ be its zero sequence with multiplicity and $B$ its Blaschke product. By [L5] the sequence is a Blaschke sequence, and $S:=\theta/B$ is holomorphic, zero-free, satisfies $|S|\le1$ and has $|S^*|=1$ a.e. By steps 1.1, 2.1 and 3.1 there are $\lambda\in\mathbb T$ and $\mu\perp m$ with $S=\lambda S_\mu$, so $\theta=B\cdot S=\lambda\,B\,S_\mu$: up to the unimodular constant $\lambda$, $\theta$ is the product of the Blaschke product $B$ and the singular inner function $S_\mu$. [step 2.1, step 3.1, L5, algebra]

5.1 Assembly. Steps 1.1, 2.1 and 3.1 produce the representation $S=\lambda S_\mu$ with $\mu\perp m$ for a zero-free $S$, step 4.1 proves the asserted uniqueness, and step 4.2 gives the factorisation of a general inner function. [step 2.1, step 3.1, step 4.1, step 4.2] ∎
