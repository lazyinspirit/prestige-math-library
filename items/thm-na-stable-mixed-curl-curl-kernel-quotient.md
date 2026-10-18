---
id: thm-na-stable-mixed-curl-curl-kernel-quotient
kind: theorem
title: Stable mixed curl-curl formulation with kernel gauge
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-na-curl-curl-kernel-quotient-gauge,
    thm-finite-dimensional-orthogonal-decomposition,
    thm-riesz-representation-in-finite-dimensions,
    def-algebraic-dual-and-linear-functional,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture
        notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element
        exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice for the graph spaces and real $L^2$ product as in [[def-na-curl-curl-kernel-quotient-gauge]]. Let $V_h$ be that finite-dimensional real edge space, $K_h=\ker(\operatorname{curl}|_{V_h})$, and $Z_h=V_h\cap K_h^\perp$. Here $V_h^*=\operatorname{Hom}_{\mathbb R}(V_h,\mathbb R)$ is the algebraic dual of [[def-algebraic-dual-and-linear-functional]]. For every $f\in V_h^*$ there is a unique pair $(u_h,p_h)\in Z_h\times K_h$ satisfying
$$ (\operatorname{curl}u_h,\operatorname{curl}v_h)_{L^2}+(p_h,v_h)_{L^2}=f(v_h)\quad(v_h\in V_h),\qquad (u_h,q_h)_{L^2}=0\quad(q_h\in K_h).$$
The gauge multiplier is the $L^2$ Riesz representative of $f|_{K_h}$. The quotient solution satisfies the exact stability identity
$$\|\operatorname{curl}u_h\|_{L^2}=\|f|_{Z_h}\|_{(Z_h,\|\operatorname{curl}(\cdot)\|_{L^2})^*},\qquad \|p_h\|_{L^2}=\|f|_{K_h}\|_{(K_h,\|\cdot\|_{L^2})^*}.$$
The constraint form $b(v,q)=(v,q)_{L^2}$ has inf-sup constant one when $K_h\ne\{0\}$, $V_h$ has the $H(\operatorname{curl})$ graph norm and $K_h$ has the $L^2$ norm; if $K_h=\{0\}$ the constraint is vacuous. The curl form is coercive with constant one on $Z_h$ in the quotient curl norm. No mesh-uniform estimate in the full graph norm is claimed here.

## Facts & Assumptions

**Given:** The finite-dimensional real space $V_h$, its kernel and orthogonal gauge from [[def-na-curl-curl-kernel-quotient-gauge]], and a linear functional $f\in V_h^*$.

[A1] Countable Choice is inherited from the graph-space uniqueness and real $L^2$ product interfaces; the finite-dimensional Riesz and orthogonal-decomposition arguments use no stronger choice axiom. ([[def-countable-choice]])

[F1] $K_h$ is the curl kernel, $Z_h=V_h\cap K_h^\perp$, and $\|[v_h]\|_{\operatorname{curl}}=\|\operatorname{curl}v_h\|_2$ is the quotient norm. ([[def-na-curl-curl-kernel-quotient-gauge]])

[F2] A finite-dimensional real inner-product space splits as $W\oplus W^\perp$. ([[thm-finite-dimensional-orthogonal-decomposition]])

[F3] Every real linear functional on a finite-dimensional real inner-product space is represented uniquely by inner product with a vector. ([[thm-riesz-representation-in-finite-dimensions]])

[F4] $V_h^*$ consists of all real linear functionals on $V_h$. ([[def-algebraic-dual-and-linear-functional]])

## Proof

1.1 On $Z_h$, the bilinear form $a_h(u,v)=(\operatorname{curl}u,\operatorname{curl}v)_{L^2}$ is an inner product: if $a_h(u,u)=0$, then $u\in K_h$ and $u\in K_h^\perp$, hence $u=0$. The finite-dimensional Riesz theorem [F3] applied to $f|_{Z_h}$ gives a unique $u_h\in Z_h$ with $a_h(u_h,z_h)=f(z_h)$ for every $z_h\in Z_h$. Applying [F3] to the $L^2$ inner product on the finite-dimensional $K_h$ gives a unique $p_h\in K_h$ with $(p_h,q_h)_{L^2}=f(q_h)$ for all $q_h\in K_h$. The zero subspace cases are included in [F3]. [A1, F1, F3, F4, given, construct]

2.1 Restrict the $L^2$ inner product to the finite-dimensional space $V_h$. Its orthogonal complement of $K_h$ is $V_h\cap K_h^\perp=Z_h$ by [F1], so [F2] gives $V_h=Z_h\oplus K_h$. Thus each $v_h$ has a unique orthogonal decomposition $v_h=z_h+q_h$. Since $\operatorname{curl}q_h=0$ and $(p_h,z_h)=0$, the two identities of step 1.1 give $a_h(u_h,v_h)+(p_h,v_h)=f(z_h)+f(q_h)=f(v_h)$. Also $u_h\in Z_h$ gives the gauge equation. Any solution must restrict to the unique Riesz problems on $Z_h$ and $K_h$, proving uniqueness. [A1, F1, F2, step 1.1, algebra]

3.1 For any real inner product $c(\cdot,\cdot)$ and any nonzero $w$, positivity of $c(v-tw,v-tw)$ at $t=c(v,w)/c(w,w)$ gives $|c(v,w)|^2\le c(v,v)c(w,w)$; if $w=0$ the inequality is immediate. Thus the norm of the functional $z\mapsto c(u,z)$ is at most $\|u\|_c$, and when $u\ne0$ equality is attained at $z=u$; when $u=0$ both sides vanish. Applying this argument to $a_h$ and the $L^2$ product, together with the Riesz identities of step 1.1, proves both exact dual-norm identities. For the constraint, if $q_h\ne0$ choose $v_h=q_h$; then $\operatorname{curl}q_h=0$, $\|v_h\|_{H(\operatorname{curl})}=\|q_h\|_2$, and $b(v_h,q_h)=\|q_h\|_2^2$, so the inf-sup constant is at least one. For the upper bound, the same positive-square argument with the $L^2$ inner product gives $|b(v_h,q_h)|\le\|v_h\|_2\|q_h\|_2\le\|v_h\|_{H(\operatorname{curl})}\|q_h\|_2$. On $Z_h$, $a_h(v_h,v_h)=\|[v_h]\|_{\operatorname{curl}}^2$, which gives coercivity constant one in the declared quotient norm. [A1, F1, F2, F3, step 1.1, step 2.1, algebra] ∎

