---
id: thm-milman-pettis
kind: theorem
title: Milman–Pettis theorem
status: published
origin: pipeline
deps: [def-uniformly-convex-banach-space, thm-goldstine, cor-relative-hahn-banach-bidual-isometry, lem-complete-subspace-is-closed, def-reflexive-banach-space, def-hahn-banach-extension-principle-relative, cor-goldstine-finite-data-approximation, def-countable-choice, def-dual-space-of-a-normed-space]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Transfer the uniform-convexity estimate to the bidual using two independent finite-data Goldstine approximants: one fixed dual test preserves separation and an arbitrary second test measures the midpoint.  An almost-norming weak-star slice then norm-approximates every bidual unit vector by the canonical image.  HB supplies Goldstine and the canonical isometry; Countable Choice makes the complete canonical image norm closed."
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://web.archive.org/web/20210425204615if_/https://math.jhu.edu/~sire/brezis.pdf"
      locator: "§3.7, Theorem 3.31, printed pp. 76–78"
    - title: "Harald Hanche-Olsen, Topological vector spaces"
      url: "https://www.math.ntnu.no/~hanche/notes/tvs/tvs.pdf"
      locator: "Theorem 19 (Milman–Pettis), printed p. 11"
---

## Statement

Assume the relative Hahn–Banach principle HB and the Axiom of Countable Choice
$\mathrm{AC}_\omega$.  Every real or complex uniformly convex Banach space is
reflexive.

The ultrafilter lemma is not assumed.

## Facts & Assumptions

**Given:** HB, $\mathrm{AC}_\omega$, and a real or complex uniformly convex Banach space $X$, with canonical map $J_X:X\to X^{**}$.

[F1] For every $\eta\in(0,2]$, uniform convexity supplies $\delta>0$ such that unit-ball vectors separated by at least $\eta$ have midpoint norm at most $1-\delta$ ([[def-uniformly-convex-banach-space]]).

[F2] Under HB, if $U\in B_{X^{**}}$, a finite list $f_1,\ldots,f_m\in X^*$ and $\tau>0$ are fixed, some $x\in B_X$ satisfies $|f_i(x)-U(f_i)|<\tau$ for every $i$ ([[cor-goldstine-finite-data-approximation]], equivalently [[thm-goldstine]]).

[F3] The norm on a real or complex dual space is $\|F\|=\sup_{\|f\|\le1}|F(f)|$ ([[def-dual-space-of-a-normed-space]]).

[F4] Under HB, $J_X$ is scalar-linear and isometric ([[cor-relative-hahn-banach-bidual-isometry]]); HB is the explicitly named relative dominated-extension principle ([[def-hahn-banach-extension-principle-relative]]).

[F5] Under $\mathrm{AC}_\omega$, a complete normed subspace of a normed space is closed ([[lem-complete-subspace-is-closed]]); Countable Choice is the countable-family selection principle ([[def-countable-choice]]).

[F6] A Banach space is reflexive exactly when its canonical map onto the bidual is surjective ([[def-reflexive-banach-space]]).

## Proof

1.1 We first transfer uniform convexity to $X^{**}$.  Fix $\varepsilon\in(0,2]$ and take from [F1] a number $\delta>0$ for the separation threshold $\varepsilon/2$.  Let $U,V\in B_{X^{**}}$ satisfy $\|U-V\|\ge\varepsilon$.  By [F3], choose $f_0\in B_{X^*}$ with $|(U-V)(f_0)|>3\varepsilon/4$.  In the complex case multiply $f_0$ by a scalar of modulus one, and in the real case change its sign if necessary, to obtain $f\in B_{X^*}$ with $\operatorname{Re}(U-V)(f)>3\varepsilon/4$. [F1, F3, given]

2.1 Fix an arbitrary $g\in B_{X^*}$ and $\eta>0$, and put $m:=\operatorname{Re}(U-V)(f)-\varepsilon/2>0$ and $\tau:=\min\{m/4,\eta\}>0$.  Apply [F2] separately to $U$ and $V$, each time with the two tests $f,g$ and tolerance $\tau$, obtaining $x,y\in B_X$.  Then $\operatorname{Re}f(x-y)>\operatorname{Re}(U-V)(f)-2\tau>\varepsilon/2$, so $\|x-y\|>\varepsilon/2$.  By [F1], $\|(x+y)/2\|\le1-\delta$.  Approximation at $g$ therefore gives $$\left|\frac{(U+V)(g)}2\right|<\left|\frac{g(x)+g(y)}2\right|+\tau\le1-\delta+\eta.$$ If the left side exceeded $1-\delta$, taking $\eta$ to be half that positive gap would contradict this inequality.  Hence $|(U+V)(g)/2|\le1-\delta$.  Taking the supremum over $g\in B_{X^*}$ by [F3] yields $\|(U+V)/2\|\le1-\delta$. [step 1.1, F1, F2, F3]

3.1 Thus $X^{**}$, with its given dual norm, is uniformly convex: the modulus at $\varepsilon$ may be taken to be any modulus of $X$ at $\varepsilon/2$.  Notice that step 2.1 used two finite-data witnesses only after $U,V,f,g,\eta$ were fixed; it selected no sequence or family of witnesses. [step 1.1, step 2.1]

4.1 Let $z\in X^{**}$ have norm one and let $\rho>0$.  Put $\varepsilon:=\min\{1,\rho\}\in(0,1]$ and let $\delta>0$ be the bidual modulus established in step 3.1.  Set $\gamma:=\min\{\delta/4,1/4\}$.  By [F3] choose $f_0\in B_{X^*}$ with $|z(f_0)|>1-\gamma$, and rotate or change its sign to get $f\in B_{X^*}$ with $\operatorname{Re}z(f)>1-\gamma$.  By [F2], choose $x\in B_X$ with $|f(x)-z(f)|<\gamma$.  Hence $\operatorname{Re}f(x)>1-2\gamma$, and $$\left\|\frac{z+J_Xx}{2}\right\|\ge\operatorname{Re}\frac{z(f)+f(x)}2>1-\frac{3\gamma}{2}>1-\delta.$$ The contrapositive of the bidual uniform-convexity estimate gives $\|z-J_Xx\|<\varepsilon\le\rho$. [F2, F3, F4, step 3.1]

5.1 It follows that $J_X(B_X)$ is norm dense in $B_{X^{**}}$.  Indeed, the zero vector is $J_X0$.  For nonzero $w\in B_{X^{**}}$ and a prescribed $\rho>0$, apply step 4.1 to $z=w/\|w\|$ with tolerance $\rho/\|w\|$, obtaining $x\in B_X$; then $\|w-J_X(\|w\|x)\|<\rho$ and $\|w\|x\in B_X$. [step 4.1, F4]

6.1 By [F4], $J_X$ is an isometry, so its range $J_X(X)$ is a normed subspace isometric to the complete space $X$.  Under the assumed $\mathrm{AC}_\omega$, [F5] makes this range norm closed in $X^{**}$.  Step 5.1 puts every element of $B_{X^{**}}$ in its norm closure and hence in the range.  Scaling then gives $J_X(X)=X^{**}$: the zero element is already in the range, and a nonzero element is its norm times an element of the bidual unit sphere.  Thus $J_X$ is surjective, and [F6] says that $X$ is reflexive. [step 5.1, F4, F5, F6]

7.1 HB is used exactly in [F2] for Goldstine finite-data approximation and in [F4] for the canonical isometry.  Countable Choice is used exactly through the complete-subspace closedness statement [F5].  No compactness theorem and no ultrafilter principle occurs.  If $X=\{0\}$, then $X^{**}=\{0\}$ and step 6.1 is immediate.  All scalar inequalities use real parts, so the proof covers both real and complex scalars. [F2, F4, F5, step 6.1] ∎
