---
id: def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group
kind: definition
title: Left-invariant means on $L^\infty$ of a locally compact group
status: published
origin: pipeline
dependency_level: 1
deps:
  - def-complex-haar-l-infinity-space
  - def-left-haar-integral-and-left-haar-measure
  - def-group
  - def-topological-group
  - def-borel-sigma-algebra
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - thm-of-square-roots
  - lem-of-abs-value
  - lem-of-square-monotone
  - lem-of-square-positive
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, Definition G.1.2 and Remark G.1.3 (printed pp. 447–448); the local proof gives the complex-functional modulus estimate explicitly"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 19: Reiter's Property and the Folner Condition"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture19_2012_Reiter.pdf"
      locator: "Invariant mean and amenability definitions (PDF p. 2); mean on L-infinity and unit-ball norm bound (PDF p. 9); the notes state the real-valued case"
    - title: "Matthew Daws and Volker Runde, Reiter's properties (P1) and (P2) for locally compact quantum groups, arXiv:0705.3432v5"
      url: "https://arxiv.org/pdf/0705.3432v5"
      locator: "Introduction, printed p. 1: amenability as an invariant state on complex L-infinity and the associated weak-star approximation"
---

## Definition

Let $G$ be a locally compact Hausdorff group with fixed left Haar measure $\mu$.
Write $L^\infty(G):=L^\infty(G,\mu;\mathbb C)$ for the complex a.e.-class
space of [[def-complex-haar-l-infinity-space]]. For $g\in G$ define the left
translate by
$$L_gf(x):=f(g^{-1}x).$$
It is well defined on classes and isometric, and $L_{g_1}L_{g_2}=L_{g_1g_2}$.

For a bounded complex-linear functional, write
$\|m\|:=\sup\{|m(f)|:\|f\|_\infty\le1\}$ for its operator norm.

A **mean** on $L^\infty(G)$ is a complex-linear functional
$m:L^\infty(G)\to\mathbb C$ such that $m(f)\ge0$ whenever $f\ge0$ and
$m(1_G)=1$, where $1_G$ is the class of the constant-one function. It is
**left invariant** if $m(L_gf)=m(f)$ for every $g\in G$ and
$f\in L^\infty(G)$. Every mean has operator norm one and satisfies
$$|m(f)|\le m(|f|)\le\|f\|_\infty.$$
Equivalently, a mean is a positive complex-linear functional of norm one.

## Facts & Assumptions

**Given:** A locally compact Hausdorff group $G$ with fixed left Haar measure $\mu$ and the complex normed space $L^\infty(G)$.

[A1] The left Haar measure is a nonzero Borel measure and satisfies $\mu(gE)=\mu(E)$ for every Borel set $E\subseteq G$ and $g\in G$ ([[def-left-haar-integral-and-left-haar-measure]]).

[F1] The elements of $L^\infty(G)$ are complex measurable functions modulo almost-everywhere equality; its operations are well defined, its norm is the essential supremum, and it is a complex normed vector space ([[def-complex-haar-l-infinity-space]]).

[F2] Left translation $x\mapsto g^{-1}x$ is a homeomorphism of $G$; a continuous map has Borel preimages of Borel sets ([[def-topological-group]], [[def-group]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-borel-sigma-algebra]]).

[F3] Complex conjugation, real and imaginary parts, and the modulus have their coordinate definitions and conjugation/multiplicativity laws, including $z\overline z=|z|^2$, $|zw|=|z||w|$, and $|\overline z|=|z|$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F4] For $z=a+bi$, $|\operatorname{Re}z|=|a|\le\sqrt{a^2+b^2}=|z|$; the inequality follows because $b^2\ge0$ and squaring is monotone on the nonnegative reals ([[lem-of-abs-value]], [[lem-of-square-monotone]], [[lem-of-square-positive]]).

## Proof

**Proof technique:** direct.

1.1 For $g\in G$, the composition $x\mapsto f(g^{-1}x)$ is Borel measurable by [F2]. If $f=f'$ outside a Borel null set $N$, then $L_gf=L_gf'$ outside $gN$, which is null by [A1]; thus $L_g$ is well defined on a.e. classes. For each $t>0$, $\{x:|L_gf(x)|>t\}=g\{y:|f(y)|>t\}$, so [A1] preserves every superlevel-set measure and hence the essential-supremum norm. Direct calculation gives $L_e=I$ and $L_{g_1}L_{g_2}=L_{g_1g_2}$. [A1, F1, F2, construct, algebra]

1.2 Let $m$ be a positive complex-linear functional on $L^\infty(G)$. If $u$ is real-valued, write $u=u_+-u_-$ with $u_+=(u+|u|)/2$ and $u_-=(-u+|u|)/2$, so $u_+,u_-\ge0$ and both remain in $L^\infty(G)$ by [F1, F3]. Positivity makes $m(u_+)$ and $m(u_-)$ real, so $m(u)$ is real. Thus, writing $f=\operatorname{Re}f+i\operatorname{Im}f$, one has $m(\overline f)=\overline{m(f)}$. If $m(f)\ne0$, set $\alpha:=\overline{m(f)}/|m(f)|$. By [F3], $|\alpha|=1$ and $m(\operatorname{Re}(\alpha f))=\operatorname{Re}(\alpha m(f))=|m(f)|$; since $\operatorname{Re}(\alpha f)\le|\alpha f|=|f|$ by [F3, F4], positivity gives $|m(f)|\le m(|f|)$. This inequality is immediate as well when $m(f)=0$. [F1, F3, F4, given, algebra]

2.1 The constant-one class has norm one: $\mu(G)>0$ by nonzeroness in [A1], so its superlevel set is $G$ for $0<t<1$ and empty for $t\ge1$. For every $\epsilon>0$, the essential-supremum definition [F1] gives $|f|\le(\|f\|_\infty+\epsilon)1_G$ almost everywhere. If $m$ is positive, then $m(1_G)\ge0$ and $m(|f|)\le(\|f\|_\infty+\epsilon)m(1_G)$; letting $\epsilon$ decrease to zero and using step 1.2 yields $|m(f)|\le\|f\|_\infty m(1_G)$, so $m$ is bounded. Taking the supremum on the unit ball and testing at $1_G$ shows $\|m\|=m(1_G)$. Consequently positivity and $m(1_G)=1$ imply $\|m\|=1$, and positivity with $\|m\|=1$ implies $m(1_G)=1$. For a mean this also gives $|m(f)|\le m(|f|)\le\|f\|_\infty$. [A1, F1, step 1.2, given, algebra] ∎
