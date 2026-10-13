---
id: lem-em-antisymmetric-tensor-contraction
kind: lemma
title: "Antisymmetric contractions vanish and $mU'=q\\Phi(U)$ preserves $\\eta(U,U)$"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
deps: [def-em-minkowski-affine-space, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, def-linear-map, def-vector-valued-derivative-and-integral, thm-algebra-of-derivatives, cor-differentiable-implies-continuous, cor-zero-derivative-implies-constant, def-interval]
dependency_roles:
  def-em-minkowski-affine-space: mathematical-premise
  def-bilinear-symmetric-skew-and-alternating-forms: mathematical-premise
  def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form: mathematical-premise
  thm-bilinear-forms-correspond-to-linear-maps-into-the-dual: mathematical-premise
  def-linear-map: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-interval: mathematical-premise
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David Tong, Dynamics and Relativity, University of Cambridge Part IA Mathematical Tripos (Lent 2013), §7.1–§7.4.7, printed pp. 107–145"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity (arXiv:gr-qc/9712019v1), Chapter 1, printed pp. 1–30"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $(V,\eta)$ be the four-dimensional real Minkowski vector space of
[[def-em-minkowski-affine-space]], with the fixed form of signature
$(-1,1,1,1)$. Let $F:V\times V\to\mathbb R$ be a skew-symmetric bilinear form,
$F(u,v)=-F(v,u)$ for all $u,v\in V$
([[def-bilinear-symmetric-skew-and-alternating-forms]]). Since $\eta$ is
nondegenerate, for each $u\in V$ there is exactly one $\Phi(u)\in V$ with
$\eta(\Phi(u),w)=F(w,u)$ for all $w\in V$
([[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]],
[[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]), and
$\Phi:V\to V$ is linear ([[def-linear-map]]); with
$F_{\alpha\beta}:=F(e_\alpha,e_\beta)$ in the fixed ordered basis
$(e_0,e_1,e_2,e_3)$ of [[def-em-minkowski-affine-space]] and $(\eta^{\mu\alpha})$
the inverse matrix of $(\eta_{\alpha\beta})$, one has
$\Phi(u)^\mu=\sum_{\alpha,\beta}\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$, the
index-raised form of $F$. Then $\eta(u,\Phi(u))=0$ for every $u\in V$; in
components $u_\mu F^\mu{}_\nu u^\nu=0$, where
$u_\mu:=\sum_\alpha\eta_{\mu\alpha}u^\alpha$ and
$F^\mu{}_\nu:=\sum_\alpha\eta^{\mu\alpha}F_{\alpha\nu}$. Consequently, if
$J\subseteq\mathbb R$ is a
nonempty open interval ([[def-interval]]), $U:J\to V$ is differentiable
([[def-vector-valued-derivative-and-integral]]), and $m\,U'(s)=q\,\Phi(U(s))$ on
$J$ for some real $m\ne0$ and $q$, then $s\mapsto\eta(U(s),U(s))$ is constant on
$J$ ([[thm-algebra-of-derivatives]], [[cor-differentiable-implies-continuous]],
[[cor-zero-derivative-implies-constant]]). The same norm-conservation conclusion
holds for a family of skew forms $F_s$ and their pointwise operators $\Phi_s$
defined by $\eta(\Phi_s(u),w)=F_s(w,u)$, when $mU'(s)=q\Phi_s(U(s))$: no
derivative of $F_s$ is required. In particular one may evaluate a varying field
$F_x$ along a differentiable trajectory $x(s)$. This is a conditional statement
about the given equation; it does not assert that this equation governs any
particle.

## Facts & Assumptions

**Given:** The four-dimensional Minkowski vector space $(V,\eta)$ of [[def-em-minkowski-affine-space]] with fixed ordered basis $(e_0,e_1,e_2,e_3)$, a skew-symmetric bilinear form $F:V\times V\to\mathbb R$, a nonempty open interval $J\subseteq\mathbb R$, a differentiable curve $U:J\to V$, and real numbers $m\ne0$ and $q$.

[L1] $\eta$ is symmetric and bilinear with matrix $\eta_{\alpha\beta}=\eta(e_\alpha,e_\beta)=\operatorname{diag}(-1,1,1,1)$ in the basis $(e_0,e_1,e_2,e_3)$, that matrix is its own inverse, and $\eta$ is nondegenerate ([[def-em-minkowski-affine-space]]).

[L2] A bilinear form $F$ is skew-symmetric when $F(u,v)=-F(v,u)$ for all $u,v$, and over the real field this implies $F(u,u)=0$ for every $u$: setting $v=u$ gives $2F(u,u)=0$ and division by the nonzero real scalar $2$ gives zero ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-em-minkowski-affine-space]]).

[L3] A bilinear form $B$ on a finite-dimensional space is nondegenerate exactly when its flat map $B^\flat:V\to V^*$, $B^\flat(u)(v)=B(u,v)$, is an isomorphism ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]).

[L4] The assignment $B\mapsto B^\flat$ is a linear bijection from bilinear forms on $V$ to linear maps $V\to V^*$ ([[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]]).

[L5] A map $T:V\to V$ is linear when $T(av+bw)=aT(v)+bT(w)$ ([[def-linear-map]]).

[L6] A curve $U$ into $\mathbb R^4$ is differentiable exactly when all its components are, and then $(U')^a=(U^a)'$ ([[def-vector-valued-derivative-and-integral]]).

[L7] Sums, scalar multiples and products of differentiable real functions are differentiable, with $(fg)'=f'g+fg'$ ([[thm-algebra-of-derivatives]]).

[L8] Differentiability at a limit point of the domain implies continuity there ([[cor-differentiable-implies-continuous]]).

[L9] If $f$ is continuous on an order-convex set $I$ and $f'=0$ at every interior point, then $f$ is constant on $I$ ([[cor-zero-derivative-implies-constant]]).

[L10] A nonempty open interval is order-convex, and every point of it is interior to it and is a limit point of it ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 For each $u\in V$ the map $w\mapsto F(w,u)$ is linear: by bilinearity of $F$ [L2] one has $F(aw+a'w',u)=aF(w,u)+a'F(w',u)$ for all reals $a,a'$ and all $w,w'\in V$, so $F(\cdot,u)\in V^*$. [given, L2, algebra]

1.2 The flat map $\eta^\flat:V\to V^*$, $\eta^\flat(x)(w):=\eta(x,w)$, is a bijection: $\eta$ is nondegenerate on the four-dimensional space $V$, so by [L3] its flat map is an isomorphism; equivalently, no nonzero $x$ satisfies $\eta(x,w)=0$ for all $w$. [given, L1, L3, L4]

2.1 For each $u\in V$ there is exactly one $\Phi(u)\in V$ with $\eta(\Phi(u),w)=F(w,u)$ for all $w\in V$, namely $\Phi(u):=(\eta^\flat)^{-1}\bigl(F(\cdot,u)\bigr)$: the functional $F(\cdot,u)$ lies in $V^*$ by step 1.1 and $\eta^\flat$ is a bijection by step 1.2, so exactly one $x\in V$ satisfies $\eta^\flat(x)=F(\cdot,u)$, that is $\eta(x,w)=F(w,u)$ for all $w$. [step 1.1, step 1.2, L3, L4]

3.1 $\Phi:V\to V$ is linear: for all $u,u'\in V$, all reals $a,a'$ and every $w\in V$, bilinearity of $F$ and $\eta$ [L1, L2] gives $\eta(\Phi(au+a'u'),w)=F(w,au+a'u')=aF(w,u)+a'F(w,u')=a\eta(\Phi(u),w)+a'\eta(\Phi(u'),w)=\eta(a\Phi(u)+a'\Phi(u'),w)$; since $w$ is arbitrary, the uniqueness in step 2.1 gives $\Phi(au+a'u')=a\Phi(u)+a'\Phi(u')$, which is linearity in the sense of [L5]. [step 2.1, L1, L2, L5]

3.2 Coordinate formula: writing $F_{\alpha\beta}:=F(e_\alpha,e_\beta)$ and letting $\eta^{\nu\alpha}$ denote the entry of the inverse of the matrix $(\eta_{\alpha\beta})=\operatorname{diag}(-1,1,1,1)$, one has $\Phi(u)^\nu=\eta^{\nu\alpha}F_{\alpha\beta}u^\beta$, the sum running over $\alpha,\beta\in\{0,1,2,3\}$: substituting this candidate into the defining pairing gives $\eta_{\mu\nu}\eta^{\nu\alpha}F_{\alpha\beta}u^\beta=\delta_\mu^\alpha F_{\alpha\beta}u^\beta=F_{\mu\beta}u^\beta=F(e_\mu,u)$, because $\eta_{\mu\nu}\eta^{\nu\alpha}=\delta_\mu^\alpha$ is the inverse-matrix identity and the matrix $\operatorname{diag}(-1,1,1,1)$ is its own inverse [L1]; the candidate therefore satisfies the defining property in step 2.1, and uniqueness gives the formula, that is $\Phi(u)^0=-F_{0\beta}u^\beta$ and $\Phi(u)^i=F_{i\beta}u^\beta$ for $i=1,2,3$. [step 2.1, L1, algebra]

3.3 $\eta(u,\Phi(u))=0$ for every $u\in V$: symmetry of $\eta$ [L1] and the defining equation of step 2.1 give $\eta(u,\Phi(u))=\eta(\Phi(u),u)=F(u,u)$, which is $0$ by the skew-symmetry of $F$ [L2]. [step 2.1, L1, L2, algebra]

4.1 Component form: $u_\mu F^\mu{}_\nu u^\nu=0$, where $u_\mu:=\eta_{\mu\alpha}u^\alpha$ and $F^\mu{}_\nu:=\eta^{\mu\alpha}F_{\alpha\nu}$; indeed $u_\mu F^\mu{}_\nu u^\nu=u^\alpha\eta_{\alpha\mu}\eta^{\mu\beta}F_{\beta\nu}u^\nu=u^\beta F_{\beta\nu}u^\nu=F(u,u)=0$ by [L2], the middle equality using the inverse-matrix identity of step 3.2 and the last equally following from step 3.3 with the coordinate formula, since $u^\beta F_{\beta\nu}u^\nu=\eta(u,\Phi(u))$. [step 3.2, step 3.3, L1, L2, algebra]

4.2 Norm conservation for a constant form: assume $m\,U'(s)=q\,\Phi(U(s))$ on $J$ with $m\ne0$; then $f(s):=\eta(U(s),U(s))$ is constant on $J$. Indeed, by [L1] and [L6], $f(s)=\sum_{a=0}^{3}\epsilon_a(U^a(s))^2$ with $\epsilon=(-1,1,1,1)$ is differentiable on $J$ with $f'(s)=\sum_a2\epsilon_aU^a(s)(U^a)'(s)=2\eta(U(s),U'(s))$, using the product rule and sum rule [L7]; the equation gives $\eta(U(s),U'(s))=(q/m)\eta(U(s),\Phi(U(s)))=0$ by step 3.3, so $f'=0$ everywhere on $J$; $f$ is continuous on $J$ by [L8] and the interval $J$ is order-convex with every point interior [L10], so [L9] gives that $f$ is constant on $J$. [step 3.3, L1, L6, L7, L8, L9, L10, algebra]

5.1 Varying-form clause: let $F_s$, $s\in J$, be skew-symmetric bilinear forms and let $\Phi_s$ be defined pointwise by $\eta(\Phi_s(u),w)=F_s(w,u)$, with $mU'(s)=q\Phi_s(U(s))$ on $J$; then $s\mapsto\eta(U(s),U(s))$ is again constant on $J$. Indeed the computation of step 4.2 applies verbatim — it differentiates only $U$, never $\Phi_s$ or $F_s$ — giving $f'(s)=2\eta(U(s),U'(s))$, while at each fixed $s$ one has $\eta(U(s),\Phi_s(U(s)))=F_s(U(s),U(s))=0$ by the skew-symmetry of $F_s$ [L2]; hence $\eta(U,U')=(q/m)\eta(U,\Phi_s(U))=0$ and $f'=0$ on $J$, so [L9] gives that $f$ is constant as in step 4.2. In particular, for a varying field $F_x$ and a differentiable trajectory $x(s)$ one may take $F_s:=F_{x(s)}$ and the corresponding pointwise operator $\Phi_s$. [step 4.2, L2, L6, L7, L9, algebra]

6.1 Conclusion: for every $u\in V$ there is exactly one $\Phi(u)$ with $\eta(\Phi(u),w)=F(w,u)$ for all $w$ (step 2.1); $\Phi$ is linear (step 3.1) and has the index-raised coordinate formula $\Phi(u)^\mu=\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$ (step 3.2); $\eta(u,\Phi(u))=0$ (step 3.3), in components $u_\mu F^\mu{}_\nu u^\nu=0$ (step 4.1); and both $mU'=q\Phi(U)$ and its varying-form version $mU'=q\Phi_s(U)$ make $s\mapsto\eta(U(s),U(s))$ constant on the nonempty open interval $J$ (steps 4.2 and 5.1). The statement is conditional on the displayed equation and asserts nothing about particles. [step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, step 4.2, step 5.1] ∎
