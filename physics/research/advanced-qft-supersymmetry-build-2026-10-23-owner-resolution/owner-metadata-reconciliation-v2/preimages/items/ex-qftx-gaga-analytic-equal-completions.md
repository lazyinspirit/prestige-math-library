---
id: ex-qftx-gaga-analytic-equal-completions
kind: example
title: Unequal local rings with equal completions
status: draft
origin: pipeline
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC, inherited from the faithful-flatness theorem."
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-multiplicative-subset-and-localisation
  - thm-power-series-define-holomorphic-functions-in-several-variables
  - cor-uniqueness-of-multivariable-power-series-coefficients
  - thm-qftx-gaga-analytic-local-ring-flatness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-multiplicative-subset-and-localisation: mathematical-premise
  thm-power-series-define-holomorphic-functions-in-several-variables: mathematical-premise
  cor-uniqueness-of-multivariable-power-series-coefficients: mathematical-premise
  thm-qftx-gaga-analytic-local-ring-flatness: mathematical-premise
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jean-Pierre Serre, Géométrie algébrique et géométrie analytique, §2, no. 6 and Annex §§22–24"
      url: "https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf"
    - title: "Johannes Anschütz, Lecture Notes on Étale Cohomology, §§3.24–3.26"
      url: "https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf"
    - title: "Kiran S. Kedlaya, MIT OpenCourseWare 18.726, Lecture 22: GAGA"
      url: "https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf"
verification:
  precheck: pending
---

## Example

Assume the Axiom of Choice. Let $A=\mathbb C[t]_{(t)}$ be the localization of
$\mathbb C[t]$ at polynomials nonzero at $0$, and let $B=\mathbb C\{t\}$ be
the ring of holomorphic germs at $0$. The canonical map $A\to B$ is faithfully
flat and induces the common completion $\mathbb C\llbracket t\rrbracket$, but it is not
surjective: the convergent exponential germ
$e(t)=\sum_{n=0}^{\infty}t^n/n!$ is not in its image.

## Example references

[Serre, local algebraic-to-holomorphic comparison and flat-pair appendix](https://www.college-de-france.fr/media/jean-pierre-serre/UPL1698785858825941763_Serre_GAGA.pdf)

[Anschütz, analytification of locally finite-type schemes](https://janschuetz.perso.math.cnrs.fr/skripte/lecture_notes_etale_cohomology.pdf)

[MIT OpenCourseWare, Lecture 22: GAGA](https://ocw.mit.edu/courses/18-726-algebraic-geometry-spring-2009/1329d3923b9f2d55ec7a9ec8e9cb63e9_MIT18_726s09_lec22_gaga.pdf)

## Facts & Assumptions

**Given:** AC, the local rings $A$ and $B$, and the exponential germ $e(t)$ in the statement.

[A1] AC is the principle that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] Every element of $A=\mathbb C[t]_{(t)}$ has a fraction representative $p(t)/q(t)$ with $p,q\in\mathbb C[t]$ and $q(0)\ne0$ ([[def-multiplicative-subset-and-localisation]]).

[F2] The local algebraic-to-holomorphic map for the finite-type chart $\mathbb A^1_{\mathbb C}$ at $0$ is faithfully flat and induces the common completion $\mathbb C\llbracket t\rrbracket$ ([[thm-qftx-gaga-analytic-local-ring-flatness]]).

[F3] Equal convergent power-series germs have identical Taylor coefficients ([[cor-uniqueness-of-multivariable-power-series-coefficients]]).

[F4] A power series that converges absolutely on every smaller polydisc defines a holomorphic function there ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

## Verification

1.1 Apply [F2] to $X=\operatorname{Spec}\mathbb C[t]$ and its closed point $t=0$. It gives faithful flatness of $A\to B$ and identifies both maximal-ideal completions with $\mathbb C\llbracket t\rrbracket$. [given, A1, F2]

1.2 The ratio of successive absolute terms of $e(t)$ is $|t|/(n+1)$, which tends to zero; hence its series converges absolutely on every disk and defines a holomorphic germ by [F4]. [given, F4, algebra]

2.1 Suppose $e(t)=p(t)/q(t)$ in $A$, with $q(0)\ne0$. Then $q(t)e(t)=p(t)$ as germs and evaluation at $0$ gives $p(0)=q(0)\ne0$. Write $q(t)=\sum_{j=0}^{d}q_jt^j$ with $q_d\ne0$, and let $m=\deg p$. Both $q e$ and $p$ have convergent power series on a disk about $0$: $e$ converges there by step 1.2, and multiplication by the polynomial $q$ preserves convergence. For every integer $N>\max(d,m)$, the coefficient of $t^N$ in $p$ is zero, so [F3] gives $\sum_{j=0}^{d}q_j/(N-j)!=0$. Multiplying by $N!$ yields $Q(N)=0$, where $Q(z)=\sum_{j=0}^{d}q_j z(z-1)\cdots(z-j+1)$. This is a nonzero polynomial of degree $d$ with leading coefficient $q_d$, so it cannot vanish at all sufficiently large integers. This contradiction proves that $e(t)$ is not in the image of $A$. [F1, F3, step 1.2, algebra]

3.1 Step 1.1 establishes faithful flatness and equality of completions, while step 2.1 establishes failure of surjectivity. [step 1.1, step 2.1] ∎
