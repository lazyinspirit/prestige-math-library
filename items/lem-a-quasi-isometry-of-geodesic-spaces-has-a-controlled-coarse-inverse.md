---
id: "lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse"
kind: "lemma"
title: "A quasi isometry of geodesic spaces has a controlled coarse inverse"
deps: ["thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich Corollary 9.39; local published coarse-inverse theorem"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $\lambda\ge1$, $\varepsilon,R\ge0$, and let $f:X\to Y$ satisfy
$$\lambda^{-1}d_X(x,x')-\varepsilon\le d_Y(fx,fx')\le\lambda d_X(x,x')+\varepsilon.$$
Assume the **attained** coarse-density condition: for every $y\in Y$ some $x\in X$ satisfies $d_Y(fx,y)\le R$. Assuming AC, there is $g:Y\to X$ such that
$$d_Y(fg(y),y)\le R,\qquad d_X(gf(x),x)\le\lambda(R+\varepsilon).$$
It is a $(\lambda,\lambda(2R+\varepsilon))$-quasi-isometric embedding. If such a selector $g$ is already supplied, all the estimates are choice-free. Geodesicity is unnecessary for this lemma.

## Facts & Assumptions

**Given:** The displayed inequalities and attained density condition.

[F1] The definition and qualitative inverse construction are given in [[thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse]]; we calculate its constants explicitly below.

[A1] AC says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

1.1 For $y\in Y$ put $E_y=\{x\in X:d_Y(fx,y)\le R\}$. Attained density says $E_y\ne\varnothing$. Apply A1 to the family of these sets and set $g(y)$ equal to the selected member of $E_y$. This is the sole choice use. If $Y$ is empty, existence of $f$ forces $X$ empty, and take the empty function. If a selector is supplied, start with it. In each case $d_Y(fg(y),y)\le R$. [given, A1, F1, choose]

2.1 For $y,y'\in Y$, the triangle inequality and step 1.1 give $$d_Y(y,y')-2R\le d_Y(fg(y),fg(y'))\le d_Y(y,y')+2R.$$ Combining the right inequality with the lower bound for $f$ yields $d_X(g(y),g(y'))\le\lambda d_Y(y,y')+\lambda(2R+\varepsilon)$. Combining the left inequality with the upper bound for $f$ yields $d_X(g(y),g(y'))\ge\lambda^{-1}d_Y(y,y')-(2R+\varepsilon)/\lambda$. Since $\lambda\ge1$, this implies the asserted lower bound with additive constant $\lambda(2R+\varepsilon)$. [step 1.1, given, algebra]

2.2 Apply the lower inequality for $f$ to $gf(x),x$. Its image distance is at most $R$ by step 1.1 with $y=f(x)$, so $d_X(gf(x),x)\le\lambda(R+\varepsilon)$. The estimates include $R=0$, $\varepsilon=0$ and $\lambda=1$ without division by zero or loss of attainment. [step 1.1, given, algebra]

3.1 Steps 1.1–2.2 prove all assertions. Apart from the family selection in step 1.1, only inequalities for specified points were used, proving the supplied-selector qualification. [step 1.1, step 2.1, step 2.2] ∎
