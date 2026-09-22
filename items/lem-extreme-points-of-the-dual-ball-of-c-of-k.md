---
id: lem-extreme-points-of-the-dual-ball-of-c-of-k
kind: lemma
title: Extreme points of the dual ball of C(K)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, def-extreme-point-and-face, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Orr Shalit, Advanced Analysis Notes 14: the isometric structure of C(K) — Theorem 2 and Exercises B–C, HTML lines 38–54; the extreme-point proof is stated as an exercise and is supplied locally"
      url: "https://oshalit.net.technion.ac.il/2012/11/28/advanced-analysis-notes-14-banach-spaces-application-the-stone-weierstrass-theorem-revisited-structure-of-ck/"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a nonempty
compact Hausdorff space, let $\mathbb K$ be $\mathbb R$ or $\mathbb C$, and let
$B_{C(K,\mathbb K)^*} = \{L : \|L\| \le 1\}$ be the closed dual unit ball with
the norm topology. Then the extreme points of $B_{C(K,\mathbb K)^*}$
([[def-extreme-point-and-face]]) are exactly the normalized point evaluations

$$\operatorname{ext} B_{C(K,\mathbb K)^*} \;=\; \{\, c\,\delta_x \;:\; x \in K,\ c \in \mathbb K,\ |c| = 1 \,\},$$

where $\delta_x(f) = f(x)$. The proof is written for $\mathbb K = \mathbb C$,
with the Riesz representation for complex measures. Step 0.1 derives the real
signed-measure representation isometrically from that complex interface, after
which the same variation argument applies in both scalar fields.

## Facts & Assumptions

**Given:** A nonempty compact Hausdorff space $K$, a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, the Banach space $C(K,\mathbb K)$ with the supremum norm, and its dual with the operator norm.

[L1] Every bounded complex-linear functional $L$ on $C_0(X;\mathbb C)$ for $X$ locally compact Hausdorff has a unique representation $L(f) = \int_X f\,d\mu$ by a finite regular complex Borel measure $\mu$, and $\|L\| = |\mu|(X)$; conversely every such $\mu$ defines a bounded functional ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]]). Applied to $X = K$ compact this identifies $B_{C(K)^*}$ with the set of regular complex Borel measures $\mu$ on $K$ with $|\mu|(K) \le 1$.

[L2] A point $x$ of a convex set $K_0$ is extreme when $x = (1-t)y + tz$ with $y,z \in K_0$, $0<t<1$, forces $y = z = x$ ([[def-extreme-point-and-face]]).

[L3] The Axiom of Choice holds; in particular the selection of finitely many open sets and of one point from a nonempty compact set used below is licensed, and $\mathrm{AC} \Rightarrow \mathrm{AC}_\omega$ ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The measure identification also holds isometrically over $\mathbb R$. Indeed, for a bounded real-linear $L:C(K,\mathbb R)\to\mathbb R$, define $L_{\mathbb C}(u+iv):=L(u)+iL(v)$. This is complex-linear. Given $h=u+iv$, choose $\theta$ so that $e^{-i\theta}L_{\mathbb C}(h)=|L_{\mathbb C}(h)|$; then $|L_{\mathbb C}(h)|=L(\operatorname{Re}(e^{-i\theta}h))\le\|L\|\,\|h\|_\infty$, while restriction to real-valued functions gives the reverse norm inequality. Thus $\|L_{\mathbb C}\|=\|L\|$, and [L1] represents $L_{\mathbb C}$ by a unique regular complex measure $\mu$. The conjugate measure $\bar\mu$ represents the same functional, since for $h=u+iv$,
$$\int_K h\,d\bar\mu=\overline{\int_K\bar h\,d\mu}=\overline{L(u)-iL(v)}=L(u)+iL(v).$$
Uniqueness in [L1] gives $\mu=\bar\mu$, so $\mu$ is real-valued and hence a finite regular signed measure. Conversely, a regular signed measure defines a bounded real functional; applying the same rotation argument to its complex integral shows that its real and complex operator norms agree, so [L1] gives norm $|\mu|(K)$. Together with [L1], this identifies the dual ball with regular signed or complex measures of variation at most one in the respective scalar field. [L1, algebra]

2.1 Conversely every $c\delta_x$ with $|c|=1$ is extreme. Suppose $c\delta_x=(1-t)\nu_1+t\nu_2$ with $0<t<1$ and $\|\nu_j\|\le1$. Evaluation at the constant function $1$ gives $c=(1-t)\nu_1(K)+t\nu_2(K)$ with $|\nu_j(K)|\le1$, so equality in the triangle inequality forces $\nu_1(K)=\nu_2(K)=c$ and $|\nu_j|(K)=1$. For every Borel $E$, the inequalities $1=|\nu_j(K)|\le|\nu_j(E)|+|\nu_j(K\setminus E)|\le|\nu_j|(E)+|\nu_j|(K\setminus E)=1$ are equalities. Thus $\nu_j(E)=c|\nu_j|(E)$, so $\nu_j=c\lambda_j$ for the probability measure $\lambda_j:=|\nu_j|$. The original equality becomes $\delta_x=(1-t)\lambda_1+t\lambda_2$. Positivity gives zero $\lambda_j$-mass to every compact subset of $K\setminus\{x\}$; regularity gives $\lambda_1=\lambda_2=\delta_x$, and hence $\nu_1=\nu_2=c\delta_x$. [step 1.1, L1, L2, algebra]

2.2 Under the measure identification of [step 1.1] and with the selection licensed by [L3], a measure $\mu$ with $|\mu|(K)<1$ is not extreme: choose $x\in K$ and $0<\varepsilon<1-|\mu|(K)$; then $\mu=\tfrac12(\mu+\varepsilon\delta_x)+\tfrac12(\mu-\varepsilon\delta_x)$ with both summands of variation at most $|\mu|(K)+\varepsilon<1$, and the summands differ from $\mu$. Hence every extreme point has norm and total variation one. [step 1.1, L2, L3, algebra]

2.3 If $|\mu|(K)=1$ and there is a Borel set $E$ with $0<|\mu|(E)<1$, then $\mu$ is not extreme. Write $\mu_1:=\mu|_E$ and $\mu_2:=\mu|_{K\setminus E}$. Both are nonzero with $\|\mu_j\|=|\mu_j|(K)\in(0,1)$, and $\mu=\|\mu_1\|\nu_1+\|\mu_2\|\nu_2$, where $\nu_j:=\mu_j/\|\mu_j\|$ have norm one. They are distinct because $|\nu_1|(E)=1$ whereas $|\nu_2|(E)=0$. The positive coefficients sum to one, so this is a proper convex combination inside the ball. [step 1.1, L1, L2, algebra]

2.4 Suppose $|\mu|(K)=1$ and $|\mu|(E)\in\{0,1\}$ for every Borel $E$. Then $\mu=c\delta_y$ for a unique $y\in K$ and some $|c|=1$. If $|\mu|(\{x\})=0$, outer regularity gives an open neighbourhood $U$ of $x$ with $|\mu|(U)<1$, and the two-valued hypothesis forces $|\mu|(U)=0$. If every singleton had measure zero, these open zero-measure sets would cover $K$, so compactness would give a finite such cover and contradict $|\mu|(K)=1$. Thus $|\mu|(\{y\})=1$ for some $y$. Additivity gives $|\mu|(K\setminus\{y\})=0$, so $|\mu|=\delta_y$ and $y$ is unique. Since $\mu$ is concentrated on $\{y\}$, putting $c:=\mu(\{y\})$ gives $\mu=c\delta_y$ and $|c|=1$. [step 1.1, L1, L2, algebra]

3.1 Let $\mu$ be an extreme point. By [step 2.2] $|\mu|(K)=1$. If $|\mu|$ were not $\{0,1\}$-valued then [step 2.3] would give a proper convex combination, contradicting extremality; hence [step 2.4] gives $\mu=c\delta_y$ with $|c|=1$. [step 2.2, step 2.3, step 2.4]

4.1 By [step 3.1] every extreme point is $c\delta_y$ with $|c|=1$, and by [step 2.1] every such point is extreme; hence $\operatorname{ext}B_{C(K)^*}=\{c\delta_x:x\in K,\ |c|=1\}$. [step 2.1, step 3.1] ∎

## Remarks

- **The real case.** Step 1.1 supplies the signed measure and norm equality from the declared complex Riesz theorem. In the subsequent argument every scalar factor is real, so $|c|=1$ means $c\in\{+1,-1\}$ and $\operatorname{ext}B_{C(K,\mathbb R)^*}=\{\pm\delta_x:x\in K\}$.
- **Where regularity and compactness enter.** Outer regularity turns $|\mu|(\{x\})=0$ into an open zero-measure neighbourhood in [step 2.4], and compactness reduces the resulting open cover to a finite one.
