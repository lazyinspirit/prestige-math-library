---
id: lem-weak-lower-semicontinuity-of-the-sobolev-norm
kind: lemma
title: Weak lower semicontinuity of the Sobolev norm
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-hahn-banach-extension-principle-relative, thm-hahn-banach-dominated-extension, cor-weak-convergence-implies-lower-semicontinuity-of-the-norm, def-weak-convergence-of-nets-and-sequences, def-sobolev-space-wkp-and-its-norm, lem-sobolev-norm-is-well-defined-and-definite]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (Aalto University, 2026)
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Chapters 1–3, especially §§1.1–1.4, 2.2, 2.6 and 3.1–3.5
    - title: John K. Hunter, Notes on Partial Differential Equations (2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Chapter 3 §§3.1–3.5
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$n\ge1$, $k\in\mathbb N_0$, $1<p<\infty$, and
$\mathbb K\in\{\mathbb R,\mathbb C\}$. If a sequence $(u_j)$ in
$W^{k,p}(\Omega;\mathbb K)$ converges weakly to
$u\in W^{k,p}(\Omega;\mathbb K)$ with respect to the displayed norm of
[[def-sobolev-space-wkp-and-its-norm]], then
$$\|u\|_{W^{k,p}(\Omega)}\le\liminf_{j\to\infty}\|u_j\|_{W^{k,p}(\Omega)}.$$

The statement uses the exact norm convention of the Sobolev definition: the
finite $\ell^p$ sum of derivative norms for $1\le p<\infty$ and the maximum
for $p=\infty$. Neither reflexivity nor completeness of the space is used;
the exponent hypothesis $1<p<\infty$ is retained from the intended use, and
the argument would apply to every $1\le p\le\infty$. If $\Omega=\varnothing$,
then the space is the zero space and both sides are $0$.

## Facts & Assumptions

**Given:** AC, open $\Omega\subseteq\mathbb R^n$, $k\in\mathbb N_0$, $1<p<\infty$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, and a sequence $u_j\rightharpoonup u$ in $W^{k,p}(\Omega;\mathbb K)$.

[F1] HB is the real dominated-extension principle: every real linear functional on a subspace dominated by a sublinear functional extends to the whole space with the same domination ([[def-hahn-banach-extension-principle-relative]]).

[F2] Under the Axiom of Choice the dominated-extension theorem holds for every real vector space, sublinear functional and dominated linear functional, which is precisely the assertion HB ([[thm-hahn-banach-dominated-extension]]).

[F3] Under HB, if a net $x_i$ converges weakly to $x$ in a real or complex normed space $X$, then $\|x\|\le\liminf_i\|x_i\|$, with no boundedness or completeness hypothesis ([[cor-weak-convergence-implies-lower-semicontinuity-of-the-norm]]).

[F4] Weak convergence of a sequence in a normed space means convergence against every bounded linear functional ([[def-weak-convergence-of-nets-and-sequences]]).

[F5] Assuming Countable Choice, for either scalar field and all $k\in\mathbb N_0$, $1\le p\le\infty$, the displayed $W^{k,p}(\Omega)$ formula is finite, vanishes exactly on the zero class, and makes $W^{k,p}(\Omega;\mathbb K)$ a normed space with the same derivative classes as [[def-sobolev-space-wkp-and-its-norm]] ([[lem-sobolev-norm-is-well-defined-and-definite]], [[def-sobolev-space-wkp-and-its-norm]]).

[F6] The Axiom of Choice is the assertion that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]). In particular, applying it to families indexed by $\mathbb N$ gives Countable Choice.

## Proof

**Proof technique:** obtain HB from AC, recognise the Sobolev space as a normed space under the displayed norm, and invoke the published dual-norming lower-semicontinuity corollary.

1.1 By [F6], the Axiom of Choice is available, so [F2] gives the real dominated-extension theorem; comparing its conclusion with the definition [F1] shows that HB holds. [F1, F2, F6, given]

1.2 By [F6], AC supplies the Countable Choice hypothesis of [F5]. By [F5] the set $W^{k,p}(\Omega;\mathbb K)$ with the displayed formula is a normed space over $\mathbb K$, for both $\mathbb K=\mathbb R$ and $\mathbb K=\mathbb C$, and $u_j,u$ are points of it. The weak convergence in the statement is convergence against every bounded linear functional of this normed space, as recalled in [F4], so $(u_j)$ is a net in the sense required by [F3]. [F4, F5, F6, given]

2.1 Apply [F3] with $X=W^{k,p}(\Omega;\mathbb K)$, $x_j=u_j$ and $x=u$. Its hypothesis is exactly the weak convergence of step 1.2, and its conclusion is $\|u\|\le\liminf_j\|u_j\|$, which is the displayed Sobolev-norm inequality. No reflexivity, uniform convexity, boundedness of the sequence, or completeness of $X$ is used in this application. [F3, step 1.1, step 1.2]

3.1 The choice accounting and boundary cases are explicit. The Axiom of Choice supplies HB in step 1.1 through [F2] and Countable Choice in step 1.2 through [F6] for the Sobolev definition and norm theorem [F5]. The abstract lower-semicontinuity corollary [F3] needs HB, and the Sobolev normed-space interface retains its Countable Choice hypothesis; neither use is asserted to be choice-free. The exponent hypothesis $1<p<\infty$ and the differentiability order $k$ enter only through the normed-space structure of $W^{k,p}$, so the same argument covers $p=1$ and $p=\infty$; they are recorded as a hypothesis rather than used. If $\Omega=\varnothing$, then by [F5] the space is the zero space, its norm is zero, and the inequality reads $0\le\liminf_j0=0$. If the sequence is the zero sequence or a constant sequence, both sides equal the common norm. $\square$ [F1, F2, F3, F5, F6, step 1.1, step 1.2, step 2.1]

## Sources

- Juha Kinnunen, *Sobolev Spaces*, §§1.1–1.4, 2.2, 2.6, 3.1–3.5: weak
  convergence in $W^{k,p}$ and the lower semicontinuity of the norm under weak
  limits.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3
  §§3.1–3.5: the same use of weak compactness and norm lower semicontinuity for
  Sobolev spaces.
- The functional-analytic input is the published pair
  [[def-hahn-banach-extension-principle-relative]] /
  [[cor-weak-convergence-implies-lower-semicontinuity-of-the-norm]]: the
  corollary assumes HB, which the Axiom of Choice supplies through
  [[thm-hahn-banach-dominated-extension]].
