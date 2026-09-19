---
id: thm-inverse-function-theorem-for-banach-spaces
kind: theorem
title: Inverse function theorem for Banach spaces
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-k-map-between-banach-spaces, lem-banach-mean-value-estimate-on-a-convex-set, thm-banach-fixed-point, lem-neumann-series-and-small-perturbations-of-bounded-inverses, def-axiom-of-choice, def-frechet-derivative-between-banach-spaces, def-metric-ball, thm-complete-subspace-iff-closed, def-banach-space, lem-composition-operator-norm-inequality, def-operator-norm, thm-chain-sum-product-and-composition-rules-for-banach-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zuoqin Wang, Lecture 6 — §§3.1–3.2 (contraction proof, with derivative normalization)"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$, $Y$ be real
Banach spaces, let $U \subseteq X$ be open, let $f : U \to Y$ be of class $C^k$
with $k \ge 1$ ([[def-c-k-map-between-banach-spaces]]), and let $a \in U$. If
$Df(a) : X \to Y$ is a bounded linear isomorphism — that is, $Df(a)$ is
bijective and its inverse $Df(a)^{-1} : Y \to X$ is bounded — then there are
open sets $U_0 \subseteq U$ with $a \in U_0$ and $V_0 \subseteq Y$ with
$f(a) \in V_0$ such that $f|_{U_0} : U_0 \to V_0$ is a bijection and its inverse
$g := (f|_{U_0})^{-1} : V_0 \to U_0$ is of class $C^k$, with

$$Dg\bigl(f(x)\bigr) = Df(x)^{-1} \qquad \text{for every } x \in U_0 .$$

## Facts & Assumptions

**Given:** AC, real Banach spaces $X, Y$, an open $U \subseteq X$, $a \in U$, a $C^k$ map $f : U \to Y$ with $k \ge 1$, and a bounded linear isomorphism $A := Df(a) : X \to Y$.

[L1] $C^k$ means the recursive operator-norm condition of [[def-c-k-map-between-banach-spaces]]: $f$ is $C^{k-1}$, its $(k-1)$-st derivative exists as a differentiable map, and $D^kf$ is continuous; in particular $Df$ is continuous and every differentiable map is continuous.

[L2] Mean value estimate: on an open convex set, a differentiable map whose derivative is bounded by $M$ on a segment is $M$-Lipschitz along that segment ([[lem-banach-mean-value-estimate-on-a-convex-set]]); applied under AC.

[L3] A contraction of a nonempty complete metric space has exactly one fixed point in it ([[thm-banach-fixed-point]]).

[L4] Neumann series: if $\|R\| < 1$ then $I-R$ is invertible with $\|(I-R)^{-1}\| \le (1-\|R\|)^{-1}$, and if $A$ is invertible with $\|A^{-1}E\| < 1$ then $A+E$ is invertible with $(A+E)^{-1} = (I+A^{-1}E)^{-1}A^{-1}$ and $\|(A+E)^{-1}\| \le \|A^{-1}\|(1-\|A^{-1}E\|)^{-1}$ ([[lem-neumann-series-and-small-perturbations-of-bounded-inverses]]).

[L5] Chain rule and its linear special case: a bounded linear map equals its own derivative at every point, so $D(L\circ F)(x) = L\circ DF(x)$, and the derivative of a composite of differentiable maps is the composite of the derivatives ([[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]).

[L6] Operator norm and composition: $\|Tu\| \le \|T\|\,\|u\|$ and $\|ST\| \le \|S\|\,\|T\|$ ([[def-operator-norm]], [[lem-composition-operator-norm-inequality]]); a Banach space is complete ([[def-banach-space]]).

[L7] A closed subset of a complete metric space is complete in the subspace metric ([[thm-complete-subspace-iff-closed]], claim 2, in ZF); a closed ball $\bar B(a,r)$ is a closed subset of $X$, being $\{x : \|x-a\| \le r\}$ ([[def-metric-ball]]).

[L8] $D\Phi(x)$ is characterised by the $\varepsilon$-$\delta$ remainder estimate of the Fréchet derivative ([[def-frechet-derivative-between-banach-spaces]]).



## Proof

**Proof technique:** direct.

1.1 *(Affine changes of variable preserve the class.)* Let $F$ be of class $C^k$ on an open set, let $\tau(x) = x_0+x$ be a translation, and let $L \in \mathcal B(Y,Z)$. Then $F\circ\tau$ is of class $C^k$ with $D^j(F\circ\tau)(x) = D^jF(\tau(x))$, and $L\circ F$ is of class $C^k$ with $D^j(L\circ F)(x) = L\circ D^jF(x)$, for every $j \le k$: by [L5] the first derivatives are $D(F\circ\tau)(x) = DF(\tau(x))$ and $D(L\circ F)(x) = L\circ DF(x)$, and the induction step differentiates these identities, the derivative of the translation being the identity and that of the bounded linear postcomposition $S \mapsto L\circ S$ being itself, with $\|L\circ S\| \le \|L\|\,\|S\|$ by [L6] ensuring continuity of the resulting expressions. [L1, L5, L6, algebra]

1.2 If $X=\{0\}$, then the isomorphism $A:X\to Y$ forces $Y=\{0\}$ and the theorem is immediate with $U_0=U=\{0\}$ and $V_0=Y$; hence assume $X\ne\{0\}$, so $\|A^{-1}\|>0$. Since $Df$ is continuous at $a$ by [L1], choose $\rho>0$ such that $B(a,\rho)\subseteq U$ and $$ \|Df(x)-A\|<\frac{1}{2\|A^{-1}\|} \qquad(x\in B(a,\rho)). $$ Put $r:=\rho/3$. Then $\bar B(a,r)\subseteq B(a,2r)\subseteq B(a,\rho)\subseteq U$, and $\|A^{-1}(Df(x)-A)\|\le\tfrac12$ on $B(a,2r)$. Thus $Df(x)$ is invertible there by [L4], with $\|Df(x)^{-1}\|\le2\|A^{-1}\|$. [L1, L4, L6, choose]

2.1 Put $\Phi := A^{-1}\circ f$ on $U$; by [L5], $D\Phi(x) = A^{-1}\circ Df(x)$, so $\Phi(a) = A^{-1}f(a) =: b$, $D\Phi(a) = I_X$, and $\Phi$ is of class $C^k$ by [step 1.1]. Put also $\Psi(x) := x-\Phi(x)$ on $B(a,2r)$; then $D\Psi(x) = I_X - A^{-1}Df(x) = -A^{-1}(Df(x)-A)$, so $\|D\Psi(x)\| \le \|A^{-1}\|\,\|Df(x)-A\| < \tfrac12$ for every $x \in B(a,2r)$. [step 1.2, L1, L5, L6, algebra]

3.1 For $x,z\in\bar B(a,r)$ their segment lies in $\bar B(a,r)\subset B(a,2r)$, so [L2] applied to $\Psi$ on the open convex set $B(a,2r)$ gives $\|\Psi(x)-\Psi(z)\|\le\tfrac12\|x-z\|$. Since $\Phi(x)-\Phi(z)=(x-z)-(\Psi(x)-\Psi(z))$, also $\|\Phi(x)-\Phi(z)\|\ge\tfrac12\|x-z\|$. In particular, $\Phi$ is injective on $B(a,r)$. [step 1.2, step 2.1, L2, algebra]

4.1 Fix $y \in B(b,r/4)$ and define $T_y(x) := y+x-\Phi(x) = y+\Psi(x)$ on $\bar B(a,r)$. For $x \in \bar B(a,r)$ one has $T_y(x)-a = (y-b) + \Psi(x)-\Psi(a)$ because $a-\Phi(a) = \Psi(a)$, so [step 3.1] yields $\|T_y(x)-a\| \le \|y-b\| + \tfrac12\|x-a\| < \tfrac{r}{4}+\tfrac{r}{2} < r$; thus $T_y$ maps $\bar B(a,r)$ into $B(a,r)$, and it is a contraction with constant $\tfrac12$ by [step 3.1]. By [L7] the closed ball is a nonempty complete metric space, so [L3] gives a unique fixed point $g(y) \in B(a,r)$ of $T_y$, and $T_y(x) = x$ is equivalent to $\Phi(x) = y$; hence $y$ has exactly one preimage under $\Phi$ in $B(a,r)$. [step 3.1, L3, L7, algebra]

5.1 The set $W := B(a,r) \cap \Phi^{-1}\bigl(B(b,r/4)\bigr)$ is open and contains $a$, and $\Phi|_W : W \to B(b,r/4)$ is a bijection with inverse $g$: it is injective by [step 3.1], and surjective by [step 4.1], which for each $y \in B(b,r/4)$ produces $g(y) \in B(a,r)$ with $\Phi(g(y))=y$. Moreover $g$ is Lipschitz with constant $2$: [step 3.1] gives $\|g(y)-g(z)\| \le \|\Phi(g(y))-\Phi(g(z))-(g(y)-g(z))\|+\|y-z\| \le \tfrac12\|g(y)-g(z)\|+\|y-z\|$. [step 3.1, step 4.1, L1, algebra]

6.1 For $y \in B(b,r/4)$ put $x := g(y)$; by [step 1.2] and [L4] the operator $D\Phi(x)$ is invertible with $\|D\Phi(x)^{-1}\| \le 2$. Let $h$ be small with $y+h \in B(b,r/4)$ and put $k := g(y+h)-g(y)$, so that $\|k\| \le 2\|h\|$ by [step 5.1] and $h = \Phi(x+k)-\Phi(x) = D\Phi(x)k + r_{\Phi}(k)$ with $\|r_{\Phi}(k)\| = o(\|k\|)$ by [L8]; applying $D\Phi(x)^{-1}$ gives $k - D\Phi(x)^{-1}h = -D\Phi(x)^{-1}r_{\Phi}(k)$, and $\|D\Phi(x)^{-1}r_{\Phi}(k)\| \le 2\|r_{\Phi}(k)\|$, which is $o(\|k\|) = o(\|h\|)$; hence $g$ is differentiable at $y$ with $Dg(y) = D\Phi(x)^{-1} = Df(g(y))^{-1}A$. [step 1.2, step 5.1, L4, L6, L8, algebra]

7.1 The derivative formula of [step 6.1] is continuous in $y$: the map $y \mapsto D\Phi(g(y))$ is continuous because $D\Phi$ is continuous by [L1] and [step 2.1] and $g$ is continuous by [step 5.1]; inversion is continuous at each invertible operator, since for $\|A^{-1}E\| \le \tfrac12$ the bound $\|(A+E)^{-1}-A^{-1}\| \le \|(A+E)^{-1}\|\,\|E\|\,\|A^{-1}\| \le 2\|A^{-1}\|^2\|E\|$ from [L4] and [L6] tends to $0$ with $\|E\|$. Hence $g$ is of class $C^1$. [step 5.1, step 6.1, L1, L4, L6, algebra]

8.1 *(Higher regularity.)* Inversion $\mathrm{inv}(A) := A^{-1}$ is of class $C^\infty$ on the open set of invertible operators in $\mathcal B(X)$: for $\|A^{-1}H\| < 1$, [L4] gives $(A+H)^{-1} = A^{-1}-A^{-1}HA^{-1}+R(H)$ with $\|R(H)\| \le \frac{\|A^{-1}\|^3\|H\|^2}{1-\|A^{-1}H\|}$, whence $D\,\mathrm{inv}(A)H = -A^{-1}HA^{-1}$; that formula is continuous in $A$ by [L4] and [L6], and iterating the expansion differentiates it again, so $\mathrm{inv}$ is $C^r$ for every $r$. Now let $k \ge 2$ and let $\Phi$ be of class $C^k$; then $D\Phi$ is of class $C^{k-1}$ by [L1] and $Dg = \mathrm{inv}\circ D\Phi\circ g$ by [step 6.1] and [L5]. If $g$ is of class $C^{j-1}$ for some $j$ with $2 \le j \le k$, then $Dg$, a composite of $C^{j-1}$ maps, is of class $C^{j-1}$ and hence $g$ is of class $C^j$; the case $j = 1$ is [step 7.1], so induction gives $g$ of class $C^k$. [step 7.1, L1, L4, L5, L6]

9.1 Transfer to $f$: by [step 5.1] the set $U_0 := W$ is an open neighbourhood of $a$ contained in $U$, and $V_0 := f[U_0] = A\bigl[\Phi[W]\bigr] = A\bigl[B(b,r/4)\bigr]$ is an open neighbourhood of $f(a)$; the restriction $f|_{U_0}$ is a bijection onto $V_0$ with inverse $F(y) := g(A^{-1}y)$, which is of class $C^k$ by [step 1.1] and [step 8.1] as a composite of the bounded linear map $A^{-1}$ and the $C^k$ map $g$. [step 5.1, step 1.1, step 8.1, L6, algebra]

10.1 For $x \in U_0$ the map $F\circ f$ equals the identity near $x$, so the chain rule [L5] differentiates it to $DF(f(x))\,Df(x) = I_X$; multiplying on the right by $Df(x)^{-1}$ gives $DF(f(x)) = Df(x)^{-1}$, which is the displayed derivative formula for the statement's inverse $g$, here the map $F$ of [step 9.1]. [step 9.1, step 5.1, L5, algebra] ∎
