---
id: cor-bauer-maximum-principle
kind: corollary
title: Bauer maximum principle
status: published
origin: pipeline
deps: ["def-extreme-point-and-face", "thm-locally-convex-continuous-dual-separates-points", "thm-compact-iff-fip", "thm-zorn", "def-axiom-of-choice", "thm-hahn-banach-dominated-extension", "def-upper-semicontinuous-real-map-on-a-topological-space"]
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
    - title: "Ian Ball, Bauer’s Maximum Principle for Quasiconvex Functions"
      url: "https://arxiv.org/pdf/2305.04893"
      locator: "pp. 1–2, standard convex-objective proof, steps 1–3"
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.5, minimal-face method in Theorem 3.46, pp. 149–151"
proof_strategy: zorn
---

## Statement

**Assume the Axiom of Choice.**  Let $K$ be a nonempty compact convex subset
of a locally convex Hausdorff real or complex topological vector space.  Every
upper-semicontinuous convex function $f:K\to\mathbb R$ attains its maximum at
an extreme point of $K$.

## Facts & Assumptions

**Given:** AC, a locally convex Hausdorff real or complex TVS $X$, a nonempty compact convex $K\subseteq X$, and an upper-semicontinuous convex $f:K\to\mathbb R$.

[F1] Upper semicontinuity means that each superlevel $\{x:f(x)\geq a\}$ is closed ([[def-upper-semicontinuous-real-map-on-a-topological-space]]).

[F2] A singleton is a face exactly when its point is extreme ([[def-extreme-point-and-face]]).

[F3] Assuming HB, continuous dual functionals separate distinct points of a Hausdorff locally convex space by their real parts ([[thm-locally-convex-continuous-dual-separates-points]]).

[F4] In a compact space, every closed family with the finite-intersection property has nonempty intersection ([[thm-compact-iff-fip]]).

[F5] Under AC, every nonempty poset whose chains have upper bounds has a maximal element ([[thm-zorn]]).

[F6] AC says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F7] AC supplies Hahn–Banach dominated extension ([[thm-hahn-banach-dominated-extension]]).

## Proof

**Proof technique:** Zorn's lemma on closed extremal subsets.

1.1 For each $y\in K$ put $L_y=\{x\in K:f(x)\geq f(y)\}$, which is closed by [F1].  Any finite subfamily has nonempty intersection: choose from its finite list an index at which the finitely many real values $f(y)$ are largest, and the corresponding $y$ belongs to every listed $L_y$; the empty finite intersection is $K\ne\varnothing$.  Thus [F4] supplies $z\in\bigcap_{y\in K}L_y$, so $m:=f(z)$ is the maximum of $f$ on $K$. [F1, F4, given]

2.1 The maximizer set $M=\{x\in K:f(x)=m\}=\{x\in K:f(x)\geq m\}$ is nonempty and closed by [F1].  Call a subset $S\subseteq K$ **$K$-extremal** when $(1-t)x+ty\in S$, for $x,y\in K$ and $0<t<1$, implies $x,y\in S$. [F1, step 1.1, construct]

3.1 The set $M$ is $K$-extremal.  Indeed, if $w=(1-t)x+ty\in M$ with $0<t<1$, convexity and maximality give $m=f(w)\leq(1-t)f(x)+tf(y)\leq m$; positivity of both coefficients and $f(x),f(y)\leq m$ force $f(x)=f(y)=m$. [step 1.1, step 2.1, given]

4.1 Let $\mathcal P$ be the nonempty closed $K$-extremal subsets of $M$, ordered by reverse inclusion.  It is nonempty because $M\in\mathcal P$. [step 2.1, step 3.1]

5.1 An empty chain has upper bound $M$.  For a nonempty chain $\mathcal C\subseteq\mathcal P$, every finite intersection is its inclusion-smallest listed member and hence nonempty.  Because every member is closed in compact $K$, [F4] makes $H=\bigcap_{S\in\mathcal C}S$ nonempty and closed.  If a strict convex combination lies in $H$, extremality in every $S$ puts both endpoints in every $S$, so $H$ is $K$-extremal.  Thus $H\in\mathcal P$ and is an upper bound in the reverse-inclusion order. [F4, step 4.1]

6.1 By [F5], with AC declared in [F6], $\mathcal P$ has a maximal element $M_0$, equivalently an inclusion-minimal nonempty closed $K$-extremal subset of $M$. [F5, F6, step 4.1, step 5.1]

7.1 Suppose $p,q\in M_0$ are distinct.  By [F7], AC supplies HB, so [F3] gives a continuous $f_0\in X'$ for which $u=\operatorname{Re}f_0$ has $u(p)\ne u(q)$. [F3, F7, step 6.1]

8.1 Apply the finite-intersection argument of step 1.1 to the continuous real function $u|_{M_0}$: its superlevels in $M_0$ are closed in $K$ because $M_0$ is closed and $u$ is continuous, and the family indexed by $y\in M_0$ has the finite-intersection property.  Hence $u$ has a maximum $c$ on $M_0$, and $N=\{x\in M_0:u(x)=c\}$ is nonempty and closed in $K$.  It is proper because $u(p)\ne u(q)$. [F4, step 1.1, step 6.1, step 7.1]

9.1 The set $N$ is $K$-extremal: if $(1-t)x+ty\in N$ with $x,y\in K$ and $0<t<1$, extremality of $M_0$ first gives $x,y\in M_0$; linearity yields $c=(1-t)u(x)+tu(y)$ while $u(x),u(y)\leq c$, so positivity forces $u(x)=u(y)=c$ and $x,y\in N$.  Thus $N\in\mathcal P$ is a proper subset of $M_0$, contradicting minimality. [step 6.1, step 8.1]

10.1 Therefore $M_0=\{e\}$ for some $e\in M$.  Since this singleton is $K$-extremal, it satisfies the singleton face condition in [F2], so $e$ is extreme in $K$; and $e\in M$ gives $f(e)=m=\max_Kf$. [F2, step 2.1, step 6.1, step 9.1]

11.1 The preceding maximum and extremality argument constructs a nonempty closed extremal maximizer set, the Zorn argument produces a minimal one, and the separating-functional argument proves it is a singleton consisting of the required extreme maximizer. [step 1.1, step 3.1, step 6.1, step 10.1] ∎

## Remarks

The maximizer set need not be convex: for $f(x)=x^2$ on $[-1,1]$ it is $\{-1,1\}$.  The proof therefore does not apply Krein–Milman to that set; it uses closed $K$-extremal subsets, exactly as the endpoint calculation above requires.
