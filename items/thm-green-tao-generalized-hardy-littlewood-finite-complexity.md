---
id: thm-green-tao-generalized-hardy-littlewood-finite-complexity
kind: theorem
title: "Green–Tao generalized Hardy–Littlewood asymptotic for finite-complexity systems"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
  - def-affine-linear-forms-system-and-size
  - def-finite-complexity-of-a-linear-forms-system
  - def-local-von-mangoldt-factor-beta-p
  - def-von-mangoldt-function
  - def-convex-subset-of-euclidean-space
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-natural-logarithm
  - def-gowers-uniformity-norm-on-intervals
  - def-bounded-complexity-nilsequence-on-an-interval
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - def-number-theoretic-mobius-function
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-ultrafilter-extension-principle
  - lem-finite-complexity-local-factors-converge
  - lem-finite-complexity-system-admits-s-normal-form-extension
  - alg-w-trick-and-enveloping-sieve-for-linear-systems
  - thm-green-tao-ziegler-inverse-theorem-for-gowers-norms
  - thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences
  - thm-w-tricked-primes-have-pseudorandom-majorant
  - thm-siegel-walfisz-prime-distribution
  - lem-sparse-generalized-von-neumann-for-finite-complexity-systems
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Main Theorem, printed p. 1763; Conjecture 1.2, printed p. 1757; formal GI(s) and MN(s) hypotheses in Section 8, Conjectures 8.3 and 8.5."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 109–128: finite-complexity prime patterns, W-trick, pseudorandom majorants, Gowers norms, and nilsequence inputs; this is contextual corroboration, not a reconstruction of the full proof."
---

## Statement

Assume the Axiom of Choice (every family of nonempty sets has a choice function), Countable Choice (every countable family of nonempty sets has a choice function), and Dependent Choice (every entire relation on a nonempty set admits an infinite chain from any prescribed starting point). Let $s\ge0$ and $d,t\ge1$ be fixed integers, and let $L>0$. For each integer $N\ge2$, let $\Psi=(\psi_1,\ldots,\psi_t):\mathbb Z^d\to\mathbb Z^t$ be a system of nonconstant integer affine-linear forms of complexity at most $s$, with $\|\Psi\|_N\le L$, and let $K_N\subseteq[-N,N]^d$ be a bounded convex measurable set. Extend the von Mangoldt function by $\Lambda_{\mathbb Z}(m)=\Lambda(m)$ for $m\ge1$ and $\Lambda_{\mathbb Z}(m)=0$ for $m\le0$. Put

$$
\beta_\infty(\Psi,K_N)=\lambda_d\bigl(\{x\in K_N:\psi_i(x)>0\text{ for all }i\}\bigr),
\qquad
\mathfrak S(\Psi)=\prod_p\beta_p(\Psi),
$$

where $\lambda_d$ is $d$-dimensional Lebesgue measure and $\beta_p$ is the local factor defined above. For fixed $s,d,t,L$, the asymptotic

$$
\sum_{n\in K_N\cap\mathbb Z^d}\prod_{i=1}^t\Lambda_{\mathbb Z}(\psi_i(n))
=\beta_\infty(\Psi,K_N)\,\mathfrak S(\Psi)+o_{s,d,t,L}(N^d)
$$

holds uniformly over these systems and sets when $s\le2$. For $s\ge3$, the same conclusion holds assuming both of the following order-$s$ hypotheses. **Inverse Gowers hypothesis GI($s$):** for each $0<\delta\le1$, there are a finite family of compact $s$-step nilmanifolds with smooth Riemannian metrics and constants $c_{s,\delta},C_{s,\delta}>0$ such that for every $N$ and every $f:[N]\to[-1,1]$ with $\|f\|_{U^{s+1}[N]}>\delta$, some nilsequence $F(g^n x)$ from that family satisfies $\|F\|_\infty\le1$, $\operatorname{Lip}(F)\le C_{s,\delta}$, and $|\mathbb E_{n\in[N]}f(n)F(g^n x)|\ge c_{s,\delta}$. **Möbius–nilsequence hypothesis MN($s$):** for every fixed compact $s$-step nilmanifold $G/\Gamma$ with a smooth Riemannian metric, every $M>0$, every 1-bounded $s$-step nilsequence $F(g^n x)$ with $\operatorname{Lip}(F)\le M$, and every $A>0$, there is a constant $C_{A,M,G/\Gamma,s}$ independent of $g,x,N$ such that

$$
\left|\mathbb E_{n\in[N]}\mu(n)F(g^n x)\right|\le C_{A,M,G/\Gamma,s}(\log N)^{-A}.
$$

Here $[N]=\{1,\ldots,N\}$ and $\mathbb E_{n\in[N]}h(n):=N^{-1}\sum_{n=1}^Nh(n)$; $U^{s+1}[N]$ is the normalized interval Gowers norm, and $\mu$ is the number-theoretic Möbius function. In both hypotheses, $g\in G$, $x\in G/\Gamma$, and $F$ is a Lipschitz function on the compact $s$-step nilmanifold $G/\Gamma$ evaluated along the orbit $g^nx$; a nilsequence is such an orbit-evaluation sequence. The local-factor product converges for every finite-complexity system.

## Statement references

[[def-affine-linear-forms-system-and-size]]

[[def-finite-complexity-of-a-linear-forms-system]]

[[def-local-von-mangoldt-factor-beta-p]]

[[def-von-mangoldt-function]]

[[def-convex-subset-of-euclidean-space]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[def-natural-logarithm]]

[[def-gowers-uniformity-norm-on-intervals]]

[[def-bounded-complexity-nilsequence-on-an-interval]]

[[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[[def-number-theoretic-mobius-function]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-dependent-choice]]

[[def-ultrafilter-extension-principle]]

[[lem-finite-complexity-local-factors-converge]]

[[alg-w-trick-and-enveloping-sieve-for-linear-systems]]

[[thm-green-tao-ziegler-inverse-theorem-for-gowers-norms]]

[[thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences]]

[Green and Tao, Main Theorem](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Green and Tao, Conjectures 8.3 and 8.5](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** Fixed $s,d,t,L$ and the systems, scale, convex sets, and order-$s$ hypotheses in the Statement.

[F1] Complexity at most $s$ is defined by covers of the other forms whose rational spans of homogeneous coefficient vectors omit the target vector. [[def-finite-complexity-of-a-linear-forms-system]]

[F2] The local factor is the average of the product of normalized prime-residue weights; the archimedean factor is the volume of the part of $K_N$ on which all forms are positive. [[def-local-von-mangoldt-factor-beta-p]]

[F3] For every finite-complexity system, $\beta_p(\Psi)=1+O_\Psi(p^{-2})$, and the singular product converges; it is positive if every local factor is positive. [[lem-finite-complexity-local-factors-converge]]

[A1] The assigned inverse-Gowers carrier states the nilsequence correlation conclusion for $s\ge3$, but its proof is not supplied; its statement does not cover the $s\le2$ branch, which Green–Tao treat separately. [[thm-green-tao-ziegler-inverse-theorem-for-gowers-norms]]

[A2] The Möbius–nilsequence carrier has a complete locally reviewed proof of its original unqualified polynomial-orbit orthogonality estimate. This supplies that interface only; it does not complete this theorem's inverse-Gowers, full prime-majorant or arbitrary-system sparse generalized von Neumann proof, nor remove any choice hypotheses from this theorem. [[thm-green-tao-mobius-orthogonality-to-polynomial-nilsequences]]

[A3] The assigned Siegel–Walfisz carrier states the fixed-logarithmic-modulus progression estimate, and its local proof now has an independent review at its original AC/CC/DC scope; no remaining proof or choice-scope obligation of this consumer is discharged by that fact. [[thm-siegel-walfisz-prime-distribution]]

[A4] The current batch-134 majorant carrier assumes the three choice axioms stated above and the Siegel–Walfisz estimate; it only treats the residue class $1$, prime scales and one fixed explicit cutoff. [[thm-w-tricked-primes-have-pseudorandom-majorant]]

## Proof status

No proof of the generalized asymptotic is supplied in this item. The source route uses the W-tricked prime majorant, its linear-forms and correlation tests, a sparse generalized von Neumann estimate for arbitrary finite-complexity systems on convex regions, and the order-$s$ inverse-Gowers and Möbius–nilsequence inputs. The fixed-residue majorant proof establishes its original conditional AC/CC/DC plus Siegel–Walfisz Statement using the accepted finite-condition helpers; that Statement still covers only residue $1$, prime scales and one fixed cutoff, not the arbitrary reduced residues, general scales and cutoff interfaces needed here. The Siegel–Walfisz estimate has an accepted local proof at its original AC/CC/DC scope. These facts do not supply the broader majorant interface or the generalized asymptotic. The local prerequisite `lem-sparse-generalized-von-neumann-for-finite-complexity-systems` is also absent; the existing sparse generalized von Neumann theorem covers arithmetic progressions only. The inverse-Gowers carrier's Facts record a UL/BPI proof-route dependency ([[thm-green-tao-ziegler-inverse-theorem-for-gowers-norms]], [[def-ultrafilter-extension-principle]]), distinct from the AC/CC/DC assumptions of the majorant interface. The full claim is retained and escalated with these dependencies unresolved.
