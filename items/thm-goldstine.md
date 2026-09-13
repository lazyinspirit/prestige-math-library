---
id: thm-goldstine
kind: theorem
title: Goldstine's theorem
status: published
origin: pipeline
deps: ["lem-basic-weak-star-neighborhoods", "cor-relative-hahn-banach-bidual-isometry", "thm-strict-separation-of-a-point-from-a-closed-convex-set", "def-hahn-banach-extension-principle-relative"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.1, Corollary 3.29, pp. 131–132"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.3, Theorem 5.13, pp. 148–149"
proof_strategy: direct
---

## Statement

**Assume HB.**  For every real or complex normed space $X$, the canonical image
$J_X(B_X)$ is weak-star dense in $B_{X^{**}}$.  No compactness or completeness
hypothesis is used.

## Facts & Assumptions

**Given:** HB, a real or complex normed space $X$, and the canonical evaluation map $J_X:X\to X^{**}$.

[F1] Under HB the canonical bidual map is a scalar-linear isometry: $J_X(x)(f)=f(x)$ and $\lVert J_Xx\rVert=\lVert x\rVert$ ([[cor-relative-hahn-banach-bidual-isometry]]).

[F2] A point outside a nonempty closed convex subset of a finite-dimensional real Euclidean space admits strict real-linear separation ([[thm-strict-separation-of-a-point-from-a-closed-convex-set]]).

[F3] Weak-star neighborhoods are determined by finitely many evaluations ([[lem-basic-weak-star-neighborhoods]]).

[F4] HB is the real dominated-extension principle, with no topology or completeness hypothesis ([[def-hahn-banach-extension-principle-relative]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $J_X(B_X)\subseteq B_{X^{**}}$.  This is where HB supplies the norm equality needed for the stated canonical isometric embedding. [F1, F4]

1.2 Fix $x^{**}\in B_{X^{**}}$ and a basic weak-star neighborhood determined by $f_1,\ldots,f_m\in X^*$ and $\varepsilon>0$.  If $m=0$, it contains $J_X(0)$.  Suppose $m\geq1$, put $T(x)=(f_1(x),\ldots,f_m(x))$, $v=(x^{**}(f_1),\ldots,x^{**}(f_m))$, and let $C$ be the Euclidean closure of $T(B_X)$ in $\mathbb K^m$, viewed as $\mathbb R^m$ or $\mathbb R^{2m}$.  The set $C$ is nonempty, closed and convex because $B_X$ is nonempty and convex and $T$ is real-linear. [F3, given]

2.1 If $v\notin C$, [F2] gives a nonzero real-linear functional $\ell$ and a real $b$ with $\ell(z)\leq b<\ell(v)$ for every $z\in C$.  Every real-linear functional on $\mathbb K^m$ has the form $\ell(z)=\operatorname{Re}\sum_{j=1}^m c_jz_j$: in the complex case write its coefficients on real and imaginary coordinate vectors and take $c_j=a_j-ib_j$. [F2, step 1.2]

3.1 Put $f=\sum_jc_jf_j\in X^*$.  The separation inequalities give $\sup_{x\in B_X}\operatorname{Re}f(x)<\operatorname{Re}x^{**}(f)$.  Yet $\sup_{x\in B_X}\operatorname{Re}f(x)=\lVert f\rVert$: the inequality $\leq$ is the norm bound, while for any $x$ rotate or change its sign so that $f(x)$ becomes the nonnegative real $|f(x)|$, and then take the supremum.  Since $\lVert x^{**}\rVert\leq1$, one also has $\operatorname{Re}x^{**}(f)\leq|x^{**}(f)|\leq\lVert f\rVert$. [step 2.1, algebra]

4.1 The strict inequality in step 3.1 would therefore read $\lVert f\rVert<\operatorname{Re}x^{**}(f)\leq\lVert f\rVert$, which is impossible.  Hence $v\in C$. [step 3.1]

5.1 Because $v$ lies in the closure of $T(B_X)$, the open coordinate box $\{z:|z_j-v_j|<\varepsilon,\ 1\leq j\leq m\}$ meets $T(B_X)$.  Thus some $x\in B_X$ satisfies $|J_X(x)(f_j)-x^{**}(f_j)|<\varepsilon$ for every $j$, so $J_X(x)$ belongs to the chosen neighborhood. [F1, step 1.2, step 4.1]

6.1 Every basic weak-star neighborhood of every $x^{**}\in B_{X^{**}}$ therefore meets $J_X(B_X)$, including the empty-test and zero-space cases handled in step 1.2.  This is exactly weak-star density. [F3, step 1.1, step 1.2, step 5.1] ∎
