---
id: thm-yangian-evaluation-module-well-defined
kind: theorem
title: "The gl_N evaluation formula satisfies RTT"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-yangian-gl-n-rtt-presentation, def-yangian-evaluation-module, def-matrix-units, lem-yangian-rtt-component-commutator-form]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§§1.8 and 1.16, including the component RTT relation and the complete verification of the evaluation homomorphism."
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3, equations (31)–(39): the dual-fundamental Lax matrix and its RTT relation."
---

## Statement

Let $N\ge2$, let $W$ be a left $\mathfrak{gl}_N(\mathbb C)$-module with action $\rho$, and let $a\in\mathbb C$. The assignment in [[def-yangian-evaluation-module]] extends to a representation of $Y_i(\mathfrak{gl}_N)$ on $W(a)$. In particular, the dual-natural action $\rho^\vee(E_{ij})f^k=-\delta_{ik}f^j$ is a $\mathfrak{gl}_N$-representation, and its unnormalized auxiliary Lax matrix equals $R_N(u-a)$.

## Facts & Assumptions

**Given:** The RTT Yangian of [[def-yangian-gl-n-rtt-presentation]], a $\mathfrak{gl}_N$-module $W$, its action $\rho$, and a spectral shift $a\in\mathbb C$.

[F1] [[def-yangian-gl-n-rtt-presentation]]: $R_N(x)=xI+iP_N$, and the defining relation is $R_{12}(u-v)T_1(u)T_2(v)=T_2(v)T_1(u)R_{12}(u-v)$.

[F2] [[def-yangian-evaluation-module]]: the proposed generator action is $t_{ij}(u)=\delta_{ij}I_W-i\rho(E_{ij})/(u-a)$, and the dual-natural action is $E_{ij}f^k=-\delta_{ik}f^j$.

[F3] [[def-matrix-units]]: $E_{ij}$ is the matrix with entries $(E_{ij})_{rs}=\delta_{ri}\delta_{sj}$.

[F4] [[lem-yangian-rtt-component-commutator-form]]: $x[t_{ij}(u),t_{kl}(v)]=i(t_{kj}(v)t_{il}(u)-t_{kj}(u)t_{il}(v))$ for $x=u-v$ is equivalent to the matrix RTT relation.

## Proof

1.1 Let $e_1,\ldots,e_N$ be the standard column basis. By [F3], $E_{ij}e_s=\delta_{js}e_i$, so $E_{ij}E_{kl}e_s=\delta_{jk}\delta_{ls}e_i=(\delta_{jk}E_{il})e_s$ for every $s$. Hence $E_{ij}E_{kl}=\delta_{jk}E_{il}$ and $[E_{ij},E_{kl}]=\delta_{jk}E_{il}-\delta_{li}E_{kj}$. On a dual basis vector $f^s$, the explicit commutator is $[\rho^\vee(E_{ij}),\rho^\vee(E_{kl})]f^s=\delta_{ks}\delta_{il}f^j-\delta_{is}\delta_{jk}f^l$. The right side is also $\rho^\vee(\delta_{jk}E_{il}-\delta_{li}E_{kj})f^s$, by the same formula. Thus the dual-natural operators satisfy the matrix-unit bracket and form a $\mathfrak{gl}_N$-representation. [given, F2, F3, algebra]

1.2 Put $x=u-v$, $U=u-a$, and $V=v-a$. By [F4], the required component identity is the RTT relation to check. Under [F2], its left side is $-x(\delta_{jk}\rho(E_{il})-\delta_{li}\rho(E_{kj}))/(UV)$ by the bracket relation. In the parenthesized difference on the right, the quadratic terms cancel because both are $(-i)^2\rho(E_{kj})\rho(E_{il})/(UV)$. Its linear terms are $-i\delta_{kj}\rho(E_{il})(U^{-1}-V^{-1})-i\delta_{il}\rho(E_{kj})(V^{-1}-U^{-1})=ix(\delta_{jk}\rho(E_{il})-\delta_{li}\rho(E_{kj}))/(UV)$, since $V-U=-x$. Multiplication by the outer factor $i$ therefore gives the same left side. Thus every component RTT relation holds. [given, F2, F4, step 1.1, algebra]

2.1 The component relations are exactly the coefficients of the matrix relation [F1]. Thus the images of every defining relation vanish, so the assignment on the free generators factors through the RTT quotient and defines the representation $W(a)$. For $W=V_N^\vee$, its auxiliary matrix is $I+iP_N/(u-a)$ by the explicit sum $\sum_{i,j}E_{ij}\otimes E_{ji}=P_N$; multiplying by $u-a$ gives $R_N(u-a)$. [given, F1, F2, step 1.1, step 1.2, algebra] ∎
