---
id: def-contravariant-form-on-an-integrable-quantum-highest-weight-module
kind: definition
title: "The contravariant form on an integrable highest weight module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-drinfeld-jimbo-quantized-enveloping-algebra, def-kac-moody-integral-and-dominant-integral-weights, def-positive-negative-and-toral-quantum-subalgebras, def-quantum-weight-module-and-integrability, def-symmetrizable-cartan-datum-for-a-quantum-group, lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions, thm-triangular-decomposition-of-a-quantized-enveloping-algebra]
justified_by: [lem-cartan-projection-constructs-the-quantum-verma-contravariant-form]
aliases: []
dependency_level: 1
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§2, printed p. 8, displays (2.2)-(2.3) and Lemma 2.3: the anti-involution $q^h\\mapsto q^h$, $e_i\\mapsto q_if_iK_i^{-1}$, $f_i\\mapsto q_i^{-1}K_ie_i$, the unique symmetric bilinear form with $(v_\\lambda,v_\\lambda)=1$ and $(xu,v)=(u,\\sigma(x)v)$, its orthogonality on distinct weights and its nondegeneracy."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "Ch. 13, §13.2.1, printed pp. 316-317: the invariant form used in the complete-reducibility proof, via the dual module and the identification $V(\\lambda)^*\\cong V(\\lambda)$."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 3, §3.4-3.5: the contravariant form on integrable highest weight modules and the contravariant dual."
---

## Definition

Let $(I,A,D,P,P^{\vee},q)$ be a symmetrizable Cartan datum with $a_{ii}=2$ for
all $i$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]]) and let
$U_q(\mathfrak g)$ be its Drinfeld–Jimbo algebra
([[def-drinfeld-jimbo-quantized-enveloping-algebra]]). The **linear
contravariant anti-involution** $\sigma$ of $U_q(\mathfrak g)$ is defined on
generators by

$$\sigma(q)=q,\qquad\sigma(K_h)=K_h,\qquad\sigma(E_i)=q_iF_iK_i^{-1},\qquad\sigma(F_i)=q_i^{-1}K_iE_i,$$

extended as an anti-algebra map, $\sigma(xy)=\sigma(y)\sigma(x)$. It is
$\mathbb Q(q)$-linear, preserves the torus (it does not invert it), and is an
involution (Verification, step 1.1). It is distinct from the semilinear
contravariant anti-involution $\tau$ with $\tau(q)=q^{-1}$,
$\tau(E_i)=F_i$, $\tau(F_i)=E_i$, $\tau(K_h)=K_{-h}$ of
[[lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions]].

Let $\lambda\in P$ be dominant integral ([[def-kac-moody-integral-and-dominant-integral-weights]]),
so $\langle\lambda,h_i\rangle\ge0$ for all $i$, and let $(M,v_\lambda)$ be a
**normalized highest weight module**: $M$ is a $P$-graded type-one quantum
weight module ([[def-quantum-weight-module-and-integrability]]) with
$v_\lambda\in M_\lambda$, $E_iv_\lambda=0$ for all $i$, and $M=U_q(\mathfrak g)v_\lambda$.
(The normalized simple highest weight module $L(\lambda)$ is the companion
construction later on this page; the present definition applies to any
normalized highest weight module, in particular to the Verma module and to its
simple quotient.)

A **contravariant form** on $(M,v_\lambda)$ is a bilinear form
$B\colon M\times M\to\mathbb Q(q)$ such that

(i) $B$ is symmetric: $B(u,v)=B(v,u)$ for all $u,v\in M$;

(ii) $B$ is **homogeneous** for the label grading: $B(M_\mu,M_\tau)=0$
whenever the two labels have different toral characters, that is, whenever
$\langle\mu,h\rangle\ne\langle\tau,h\rangle$ for some $h\in P^{\vee}$;

(iii) $B(v_\lambda,v_\lambda)=1$ (the normalization);

(iv) $B$ is $\sigma$-invariant: $B(xu,v)=B(u,\sigma(x)v)$ for all
$x\in U_q(\mathfrak g)$ and all $u,v\in M$.

Because $\sigma$ is $\mathbb Q(q)$-linear and fixes the torus, condition (iv)
is equivalent to the adjunction displays

$$B(K_hu,v)=B(u,K_hv),\qquad B(E_iu,v)=B(u,q_iF_iK_i^{-1}v),\qquad B(F_iu,v)=B(u,q_i^{-1}K_iE_iv),$$

for all $u,v\in M$, $h\in P^{\vee}$ and $i\in I$ (Verification, step 2.1).

For $\lambda$ dominant and $L(\lambda)$ the normalized simple highest weight
module, such a form exists, is unique, and is nondegenerate on $L(\lambda)$;
moreover distinct label-weight spaces with distinct characters are orthogonal
by (ii). Uniqueness is proved here (Verification, step 4.1), as is the
orthogonality; consequently, when the pairing separates $P$, the distinct
label-weight spaces of $L(\lambda)$ are orthogonal and the restriction of $B$
to each finite-dimensional label-weight space is nondegenerate (Verification,
step 5.1). The
existence, the identification of the radical on the Verma module and the
descent to $L(\lambda)$ are proved in the local Cartan-projection lemma
`lem-cartan-projection-constructs-the-quantum-verma-contravariant-form`, which
is the declared justification of this definition. That lemma is proved on this
page, and its statement is the supplier of the existence and nondegeneracy
clauses above; establishing those clauses is its content rather than a claim of
this definition.

## Facts & Assumptions

**Given:** A symmetrizable Cartan datum with $a_{ii}=2$, its Drinfeld–Jimbo
algebra $U_q(\mathfrak g)$ with defining ideal $I_{\mathrm{DJ}}$ on the free
algebra $T$ on the generators $E_i,F_i,K_h$
([[def-drinfeld-jimbo-quantized-enveloping-algebra]]), and a normalized highest
weight module $(M,v_\lambda)$ as above.

[F1] $U_q(\mathfrak g)=T/I_{\mathrm{DJ}}$ where $I_{\mathrm{DJ}}$ is generated
by the toral relations $K_0-1$, $K_hK_{h'}-K_{h+h'}$; the toral-action
relations $K_hE_i-q^{\langle\alpha_i,h\rangle}E_iK_h$ and
$K_hF_i-q^{-\langle\alpha_i,h\rangle}F_iK_h$; the mixed relations
$E_iF_j-F_jE_i-\delta_{ij}(K_i-K_i^{-1})/(q_i-q_i^{-1})$; and the two Serre
sums $\mathrm{Serre}^{\pm}_{ij}$
([[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F2] The toral relations give $K_hK_i^{-1}=K_i^{-1}K_h$ and
$K_hE_iK_h^{-1}=q^{\langle\alpha_i,h\rangle}E_i$,
$K_hF_iK_h^{-1}=q^{-\langle\alpha_i,h\rangle}F_i$; in particular
$K_jF_iK_j^{-1}=q_j^{-a_{ji}}F_i$ and $K_jE_jK_j^{-1}=q_j^{2}E_j$, because
$\langle\alpha_i,d_jh_j\rangle=d_ja_{ji}$ ([[def-symmetrizable-cartan-datum-for-a-quantum-group]],
[[def-drinfeld-jimbo-quantized-enveloping-algebra]]).

[F3] The datum has $\langle\alpha_j,h_i\rangle=a_{ij}$ and
$d_ia_{ij}=d_ja_{ji}$, so $d_j\langle\alpha_i,h_j\rangle=d_ja_{ji}=d_ia_{ij}$
([[def-symmetrizable-cartan-datum-for-a-quantum-group]]).

[F4] The triangular decomposition: $U_q(\mathfrak g)=U_q^-U_q^0U_q^+$ as a
vector space; $U_q^+v_\lambda\subseteq\mathbb Q(q)v_\lambda$ and
$U_q^0v_\lambda=\mathbb Q(q)v_\lambda$, so $M=U_q^-v_\lambda$; the label
spaces satisfy $M_\mu=0$ unless $\mu\le\lambda$, and
$M_\lambda=\mathbb Q(q)v_\lambda$ ([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]],
[[def-positive-negative-and-toral-quantum-subalgebras]]).

[F5] Semilinearity of $\tau$ and the linearity of $\sigma$: $\sigma$ fixes
$q\in\mathbb Q(q)$ and is $\mathbb Q(q)$-linear, while $\tau$ applies
$q\mapsto q^{-1}$ and inverts the torus
([[lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions]]).

## Verification

**Proof technique:** descend the anti-map $\sigma$ through the defining ideal by
checking the relation families, rewrite the invariance condition as the
generator adjunctions, derive the orthogonality from the toral invariance, and
prove uniqueness by reduction to $M=U_q^-v_\lambda$.

1.1 Define $\sigma$ on the free algebra $T$ by the stated values on generators, extended as a $\mathbb Q(q)$-linear anti-algebra map. Every image of a defining relation lies in $I_{\mathrm{DJ}}$: the toral relations are fixed or reversed; for the toral-action relation $K_hE_i-q^{\langle\alpha_i,h\rangle}E_iK_h$ one gets $\sigma(E_i)\sigma(K_h)-q^{\langle\alpha_i,h\rangle}\sigma(K_h)\sigma(E_i)=q_iF_iK_i^{-1}K_h-q^{\langle\alpha_i,h\rangle}K_hq_iF_iK_i^{-1}=q_iF_iK_hK_i^{-1}-q_iq^{\langle\alpha_i,h\rangle}q^{-\langle\alpha_i,h\rangle}F_iK_hK_i^{-1}=0$ by [F2], and the $F$-variant is analogous; for the mixed relation with $i=j$ one gets $K_iE_iF_iK_i^{-1}-F_iE_i=E_iF_i-F_iE_i=(K_i-K_i^{-1})/(q_i-q_i^{-1})$ by [F2], and for $i\ne j$ the image is $q_iq_j^{-1}\bigl(K_jE_jF_iK_i^{-1}-F_iK_i^{-1}K_jE_j\bigr)$; since $E_jF_i=F_iE_j$ and $K_jK_i^{-1}=K_i^{-1}K_j$, the first bracket equals $q^{2d_j-d_ia_{ij}}F_iE_jK_jK_i^{-1}$ and the second equals $q^{2d_j-d_ia_{ij}}F_iE_jK_i^{-1}K_j$ (using $K_jF_iK_j^{-1}=q^{-d_ja_{ji}}F_i=q^{-d_ia_{ij}}F_i$ and $K_jE_jK_j^{-1}=q^{2d_j}E_j$ from [F2], [F3]), so their difference vanishes; finally $\sigma(\mathrm{Serre}^+_{ij})=q_i^{m}q_jK_i^{-m}K_j^{-1}\sum_{r=0}^{m}(-1)^r\binom{m}{r}_if_i^{r}f_jf_i^{m-r}=(-1)^mq_i^mq_jK_i^{-m}K_j^{-1}\mathrm{Serre}^-_{ij}$ with $m=1-a_{ij}$, a multiple of a defining relation, and likewise for $\mathrm{Serre}^-_{ij}$. Hence $\sigma$ descends to an anti-algebra endomorphism of $U_q(\mathfrak g)$; since $\sigma^2$ fixes every generator and is an algebra endomorphism ($\sigma^2(xy)=\sigma(\sigma(y)\sigma(x))=\sigma^2(x)\sigma^2(y)$), $\sigma^2=\mathrm{id}$, so $\sigma$ is an involutive anti-automorphism, $\mathbb Q(q)$-linear, with $\sigma(K_h)=K_h$ and distinct from the semilinear $\tau$ of [F5]. [given, F1, F2, F3, construct]

2.1 If $B$ satisfies condition (iv), then for $x=K_h,E_i,F_i$ one gets the three displays by substituting $\sigma(K_h)=K_h$, $\sigma(E_i)=q_iF_iK_i^{-1}$, $\sigma(F_i)=q_i^{-1}K_iE_i$. Conversely, assume the three displays hold. Let $S\subseteq U_q(\mathfrak g)$ be the set of $x$ with $B(xu,v)=B(u,\sigma(x)v)$ for all $u,v\in M$. It contains $1$ (since $\sigma(1)=1$ and $B(u,v)=B(u,v)$) and the generators; if $x,y\in S$, then $B((xy)u,v)=B(x(yu),v)=B(yu,\sigma(x)v)=B(u,\sigma(y)\sigma(x)v)=B(u,\sigma(xy)v)$ by step 1.1, so $xy\in S$. Hence $S=U_q(\mathfrak g)$, which is condition (iv). In particular $\sigma$ fixes the torus, so $B(K_hu,v)=B(u,K_hv)$: the form is toral-invariant and not toral-inverting. [step 1.1, algebra]

3.1 Homogeneity and orthogonality of different characters: let $u\in M_\mu$, $v\in M_\tau$ and $h\in P^{\vee}$. By step 2.1, $q^{\langle\mu,h\rangle}B(u,v)=B(K_hu,v)=B(u,K_hv)=q^{\langle\tau,h\rangle}B(u,v)$; since $q^{\langle\mu,h\rangle}\ne q^{\langle\tau,h\rangle}$ unless the characters agree, $B(u,v)=0$ whenever $\chi_\mu\ne\chi_\tau$. This is condition (ii), restated as a proved orthogonality: label-weight spaces with different characters are orthogonal, so under a separating pairing distinct label-weight spaces are orthogonal. [step 2.1, algebra]

4.1 Uniqueness for a normalized highest weight module: let $B,B'$ be two contravariant forms on $(M,v_\lambda)$ and put $D:=B-B'$. Then $D$ is symmetric, homogeneous and $\sigma$-invariant, and $D(v_\lambda,v_\lambda)=0$. For every word $w$ in the $F_i$ one has $\sigma(w)v_\lambda=0$: indeed $\sigma$ reverses the order and replaces each $F_i$ by $q_i^{-1}K_iE_i$, so after reversing, the leftmost applied factor is some $q_i^{-1}K_iE_i$, which annihilates $v_\lambda$ because $E_iv_\lambda=0$ and $K_i$ is invertible. Hence $D(wv_\lambda,v_\lambda)=D(v_\lambda,\sigma(w)v_\lambda)=0$ for all $w\in U_q^-$: the first equality is the invariance condition (iv) applied with $x=w$ and $u=v=v_\lambda$, and the second uses $\sigma(w)v_\lambda=0$. Now let $u=xv_\lambda$ and $v\in M$ be arbitrary, and write $v=yv_\lambda$. By [F4] the product $U_q^-U_q^0U_q^+$ spans $U_q(\mathfrak g)$, so $\sigma(x)y=\sum_tu_ta_tp_t$ with $u_t\in U_q^-$, $a_t\in U_q^0$, $p_t\in U_q^+$; since $a_tp_tv_\lambda=c_tv_\lambda$ with $c_t\in\mathbb Q(q)$, the vector $\sigma(x)yv_\lambda=\sum_tc_tu_tv_\lambda$ lies in $U_q^-v_\lambda$. Therefore $D(u,v)=D(xv_\lambda,yv_\lambda)=D(v_\lambda,\sigma(x)yv_\lambda)=0$ by the preceding vanishing. Hence $D=0$ and $B=B'$. [step 3.1, F1, F4, algebra]

5.1 In the separating case, nondegeneracy of the global form passes to each finite-dimensional label-weight space: if the pairing separates $P$ and $b\in M_\mu$ satisfies $B(b,M_\mu)=0$, then $B(b,M_\tau)=0$ for every $\tau\ne\mu$ by step 3.1 and $B(b,M_\mu)=0$ by assumption, so $b$ lies in the radical of $B$ on $M$; hence $b=0$ whenever $B$ is nondegenerate on $M$. The remaining clauses are the content of the Cartan-projection lemma: for $\lambda$ dominant and $L(\lambda)$ the normalized simple highest weight module, `lem-cartan-projection-constructs-the-quantum-verma-contravariant-form` constructs the normalized homogeneous $\sigma$-invariant form on the Verma module $M(\lambda)$ (existence), identifies its radical with the maximal proper graded submodule, descends it to $L(\lambda)$ and proves nondegeneracy of the descended form. By step 4.1 that descended form is the unique one satisfying (i)-(iv). The existence and nondegeneracy clauses of this definition are thus delegated to that declared supplier, which is proved on this page; every other clause of the definition is proved above. [step 3.1, step 4.1, given] ∎
