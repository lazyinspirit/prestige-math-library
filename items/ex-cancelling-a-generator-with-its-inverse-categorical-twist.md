---
id: ex-cancelling-a-generator-with-its-inverse-categorical-twist
kind: example
title: "Cancelling a generator with its inverse categorical twist"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - lem-khovanov-seidel-generator-complexes-are-mutually-inverse
  - def-khovanov-seidel-positive-and-negative-twist-complexes
  - def-signed-totalization-of-graded-a-m-bimodule-actions
  - def-khovanov-seidel-beta-and-gamma-bimodule-maps
  - thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Proposition 2.4"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Proposition 2.4 and its proof, printed pp. 11-13 (the complex N, the square (2.8) and the splitting N = T_{-1} + T_0 + T_1)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Fix $m\ge1$ and $1\le i\le m$, and let
$$R_i=[\,U_i\xrightarrow{\ \beta_i\ }A_m\,],\qquad R_i^{-1}=[\,A_m\xrightarrow{\ \gamma_i\ }U_i\{-1\}\,]$$
be the twist complexes of
[[def-khovanov-seidel-positive-and-negative-twist-complexes]], with $U_i$ in
homological degree $-1$ and $A_m$ in degree $0$ in the first complex, and $A_m$
in degree $0$ and $U_i\{-1\}$ in degree $1$ in the second. The totalization
$N:=R_i\otimes_{A_m}R_i^{-1}$ of
[[def-signed-totalization-of-graded-a-m-bimodule-actions]] is **not** the
diagonal bimodule. Its three nonzero terms are
$$N^{-1}=U_i\otimes_{A_m}A_m\cong U_i,\qquad N^{0}=\bigl(U_i\otimes_{A_m}U_i\{-1\}\bigr)\oplus\bigl(A_m\otimes_{A_m}A_m\bigr)\cong \bigl(U_i\otimes_{A_m}U_i\{-1\}\bigr)\oplus A_m,\qquad N^{1}=A_m\otimes_{A_m}U_i\{-1\}\cong U_i\{-1\},$$
so, counted with multiplicity, the tensor complex has the four terms
$U_i$ in degree $-1$, then $U_i\otimes_{A_m}U_i\{-1\}$ and $A_m$ in degree $0$,
then $U_i\{-1\}$ in degree $1$: it is not concentrated in degree $0$. Writing
$Q:={}_iP\otimes_{A_m}P_i=\mathbb Zu_1\oplus\mathbb Zu_2$ with
$u_1=e_i\otimes e_i$ in degree $0$ and $u_2=(i|i-1|i)\otimes e_i$ in degree $1$,
the differentials become the source's maps
$$\partial^{-1}=(\tau,\beta_i),\qquad \partial^{0}(z,a)=\gamma_i(a)-\delta(z), \qquad \tau(x\otimes y)=x\otimes u_1\otimes(i|i-1|i)y+x\otimes u_2\otimes y,$$
$$\delta(x\otimes u_1\otimes y)=x\otimes y,\qquad \delta(x\otimes u_2\otimes y)=x(i|i-1|i)\otimes y ,$$
where the middle tensor coordinate is the negative of the natural balanced
identification with $P_i\otimes_{\mathbb Z}Q\otimes_{\mathbb Z}{}_iP\{-1\}$.
This sign change converts the natural totalization maps $(-\tau,\beta_i)$
and $(\delta,\gamma_i)$ to the source’s displayed chart. The source's splitting
of this totalization is
$$N\;\cong\;T_{-1}\oplus A_m\oplus T_1,$$
where $A_m$ is the diagonal bimodule in degree $0$, and $T_{-1},T_1$ are the two
two-term complexes
$$T_{-1}=[\,U_i\xrightarrow{\ \partial^{-1}\ }\partial^{-1}(U_i)\,], \qquad T_1=[\,P_i\otimes_{\mathbb Z}\mathbb Zu_1\otimes_{\mathbb Z}{}_iP\{-1\}\xrightarrow{\ -\delta\ }U_i\{-1\}\,],$$
whose differentials are invertible; $T_{-1}$ and $T_1$ are therefore
contractible, with contracting homotopies the inverses $(\partial^{-1})^{-1}$
and $x\otimes y\mapsto -x\otimes u_1\otimes y$ of the displayed differentials.
Thus the inverse pair cancels up to homotopy, not on the nose: the two
contractible summands are the visible cost of the cancellation. The same holds
with the factors in the opposite order.

## Facts & Assumptions
**Given:** An integer $m\ge1$, an index $1\le i\le m$, the complexes $R_i,R_i^{-1}$ with the maps $\beta_i,\gamma_i$, the bimodule $U_i$ and its internal shift, the corner basis $e_iA_me_i=\mathbb Ze_i\oplus\mathbb Z(i|i-1|i)$, and the totalization of [[def-signed-totalization-of-graded-a-m-bimodule-actions]].

[L1] $R_i=[U_i\xrightarrow{\beta_i}A_m]$ with $U_i$ in degree $-1$ and $A_m$ in degree $0$, and $R_i^{-1}=[A_m\xrightarrow{\gamma_i}U_i\{-1\}]$ with $A_m$ in degree $0$ and $U_i\{-1\}$ in degree $1$; both are bounded complexes of graded bimodules with two-sided finite graded projective terms and degree-zero differentials ([[def-khovanov-seidel-positive-and-negative-twist-complexes]]).

[L2] $R_i\otimes_{A_m}R_i^{-1}\simeq A_m$ and $R_i^{-1}\otimes_{A_m}R_i\simeq A_m$ via homotopy equivalences; the proof exhibits the splitting of the first tensor complex and the explicit maps $\tau,\delta,\xi$ ([[lem-khovanov-seidel-generator-complexes-are-mutually-inverse]]).

[L3] $\beta_i(e_i\otimes e_i)=e_i$ and $\gamma_i(1)=w_i$ with $w_i$ the four-term sum displayed in the Definition; $\tau$ and $\delta$ are the degree-zero bimodule maps with $\delta\tau=\gamma_i\beta_i$, $\delta\xi=\gamma_i$, and the square (2.8) anticommutes ([[def-khovanov-seidel-beta-and-gamma-bimodule-maps]], [[lem-khovanov-seidel-generator-complexes-are-mutually-inverse]]).

[L4] The totalization of two bounded complexes of graded bimodules has the terms $(R\otimes_{A_m}S)^n=\bigoplus_{p+q=n}R^p\otimes_{A_m}S^q$ and the differential $d(r\otimes s)=d_Rr\otimes s+(-1)^pr\otimes d_Ss$, and the tensor-unit maps $M\otimes_{A_m}A_m\cong M$, $A_m\otimes_{A_m}M\cong M$ are canonical degree-zero isomorphisms ([[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L5] A two-term complex with invertible differential is contractible, with the inverse differential as contracting homotopy ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).



## Verification

**Proof technique:** direct.

1.1 *The four terms and their degrees.* By [L4] the terms of $N=R_i\otimes_{A_m}R_i^{-1}$ are the direct sums over $p+q=n$ of $R_i^p\otimes_{A_m}(R_i^{-1})^q$; the nonzero pairs are $(p,q)=(-1,0),(0,0),(-1,1),(0,1)$, giving the terms $U_i$, $A_m$, $U_i\otimes_{A_m}U_i\{-1\}$ and $U_i\{-1\}$ in homological degrees $-1,0,0,1$ as displayed, with the two degree-$0$ summands ordered as $U_i\otimes_{A_m}U_i\{-1\}$ and $A_m$; the tensor-unit isomorphisms of [L4] identify the first and last with $U_i$ and $U_i\{-1\}$. This corrects the term count: there are four terms counted with multiplicity, not three $A_m$'s. [L1, L4]

2.1 *The differentials.* After negating the natural identification of $U_i\otimes_{A_m}U_i\{-1\}$ with $P_i\otimes_{\mathbb Z}Q\otimes_{\mathbb Z}{}_iP\{-1\}$ and the tensor-unit identifications, the Koszul-signed differentials of [L4] take the form $\partial^{-1}(u)=(\tau(u),\beta_i(u))$ and $\partial^{0}(z,a)=\gamma_i(a)-\delta(z)$ with the maps $\tau,\delta$ of the display: the component into $A_m$ is $\beta_i$, the component into the middle bimodule is $\tau$, and the component out of $A_m$ is $\gamma_i$, while the component out of the middle is $-\delta$ after this coordinate change. Before that change the Koszul rule gives $(-\tau,\beta_i)$ and $(\delta,\gamma_i)$, as required. [step 1.1, L3, L4]

3.1 *The two contractible summands.* The $u_2$ component of $\tau$ is the identity on $U_i$, so $\partial^{-1}$ is injective and its restriction to its image is an isomorphism with inverse the $u_2$-coefficient projection on the middle summand, so $T_{-1}$ is contractible with contracting homotopy $(\partial^{-1})^{-1}$ by [L5]; the restriction $-\delta\colon P_i\otimes\mathbb Zu_1\otimes{}_iP\{-1\}\to U_i\{-1\}$ is an isomorphism with inverse $x\otimes y\mapsto -x\otimes u_1\otimes y$, so $T_1$ is contractible by [L5]. The map $a\mapsto(\xi(a),a)$ identifies the remaining graph in degree $0$ with $A_m$ with zero differential, because $\partial^{0}(\xi(a),a)=\gamma_i(a)-\delta\xi(a)=0$. [step 2.1, L3, L5]

4.1 *Conclusion of the example.* By the direct sum decomposition of the generator lemma [L2], $N\cong T_{-1}\oplus A_m\oplus T_1$; by step 3.1 the outer summands are contractible, so $N$ is homotopy equivalent to the diagonal bimodule and $R_iR_i^{-1}\cong\operatorname{Id}_{C_m}$, while $N$ itself is a four-term complex and not equal to $A_m$; the same argument applies to $R_i^{-1}\otimes_{A_m}R_i$. The two contractible summands are exactly the cancellation cost, and their contracting homotopies are the displayed inverses. [step 3.1, L2] ∎ 