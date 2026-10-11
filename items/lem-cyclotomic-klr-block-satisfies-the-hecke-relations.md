---
id: lem-cyclotomic-klr-block-satisfies-the-hecke-relations
kind: lemma
title: "The cyclotomic KLR block satisfies the Hecke relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 14
deps: [thm-hh-matsumoto-reduced-word-theorem,
       thm-the-symmetric-group-has-the-coxeter-presentation,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       def-cyclotomic-hecke-central-content-sector-notation,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-cyclotomic-hecke-intertwiners-and-local-power-series,
       def-affine-and-cyclotomic-type-a-hecke-algebras]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883–1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.2 relations (2.9)–(2.12) and the grading statement after (2.12); Sections 4.1–4.3, Theorem 4.1 and Remark 4.2, pp. 30–32."
---

## Statement

In the specialized cyclotomic KLR content algebra $R^\Lambda_\alpha$ define
$$x_r:=\sum_{i\in I_\alpha}(y_r+i_r)e(i),\qquad s_r:=\sum_{i\in I_\alpha}\bigl(\psi_rq_r(i)-p_r(i)\bigr)e(i)$$
in the degenerate case and
$$X_r:=\sum_{i\in I_\alpha}q^{i_r}(1-y_r)e(i),\qquad T_r:=\sum_{i\in I_\alpha}\bigl(\psi_rQ_r(i)-P_r(i)\bigr)e(i)$$
in the nondegenerate case, where $p,P,q,Q$ are the power series of
[[lem-cyclotomic-hecke-intertwiners-and-local-power-series]] evaluated in
$R^\Lambda_\alpha$ using the nilpotence of the $y$'s. Then these elements
satisfy the defining relations (3.2)–(3.5), respectively (4.2)–(4.5), of the
affine Hecke algebra and the cyclotomic relation
$\prod_i(x_1-i)^{\lambda_i}=0$, respectively
$\prod_i(X_1-q^i)^{\lambda_i}=0$; hence they define a unique $F$-algebra
homomorphism $\sigma\colon H^\Lambda_d\to R^\Lambda_\alpha$. Moreover $\sigma$
kills $e_\beta$ and every corner component $e_\beta H^\Lambda_de_\gamma$ with
$(\beta,\gamma)\ne(\alpha,\alpha)$, and restricts to a unital homomorphism
$\sigma\colon H^\Lambda_\alpha\to R^\Lambda_\alpha$ with $\sigma(e(i))=e(i)$
for $i\in I_\alpha$ and $\sigma(e(i))=0$ otherwise.

## Facts & Assumptions

**Given:** The specialized cyclotomic KLR algebra $R^\Lambda_\alpha$ with its
idempotents $e(i)$, dots $y_r$ and crossings $\psi_r$
([[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]), the sector
$H^\Lambda_\alpha$ ([[def-cyclotomic-hecke-central-content-sector-notation]]),
and the power series $p_r(i),q_r(i)$ (degenerate) respectively
$P_r(i),Q_r(i)$ (nondegenerate) of
[[lem-cyclotomic-hecke-intertwiners-and-local-power-series]].

[F1] The explicit five-branch scalar series and their pair-product/interchange identities are those proved in the explicit normalization and pair-product calculations of [[lem-cyclotomic-hecke-intertwiners-and-local-power-series]]. Only these scalar identities, not Hecke-side intertwiner relations, are used before establishing the Hecke presentation.

[F2] The KLR relations (1.6)–(1.15) hold in $R^\Lambda_\alpha$, with
(1.6) the cyclotomic relation and (1.12)–(1.13) the dot-sliding relations
([[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]); the
cyclotomic quotient is finite-dimensional and the $y$-dots are nilpotent on
root strings ([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]).

[F3] The type-A Coxeter presentation is the adjacent-transposition presentation of $S_d$ ([[thm-the-symmetric-group-has-the-coxeter-presentation]]). Applied to this Coxeter matrix, [[thm-hh-matsumoto-reduced-word-theorem]] connects reduced words by braid moves and exposes an adjacent repeat in every nonreduced word using those moves.

## Proof

**Proof technique:** direct.

**Given:** The elements of the Statement and the relations of [F1]–[F2].

1.1 A faithful KLR calculation, before quotient. Take independent dots $u,v,w$ and let $S_r$ swap positions, colours and dots. Define the following rational operators locally: equal crossings act by $D=(S-1)/(u-v)$ and unequal crossings by $Sc_{ij}$, where $c_{ij}=(1-p)/N_{ij}$ in DG or $(1-P)/N_{ij}$ in NG. The scalar pair-product identities [F1] give $c_{ij}(u,v)c_{ji}(v,u)=K_{ij}(u,v)$, with $K=1,v-u,u-v,-(u-v)^2$. On equal colours direct multiplication gives $Df=(Sf)D+(Sf-f)/(u-v)$ and $D^2=0$; on unequal colours $Sc$ simply permutes dot coefficients. Here inverse differences are multiplication on the left, and $c$ is on the right of $S$. For three distinct colours both braid products have right coefficient $c_{ij}(u,v)c_{ik}(u,w)c_{jk}(v,w)$ at $W=S_1S_2S_1$. For $(i,i,k)$ both are $(W-S_1S_2)c_{ik}(u,w)c_{ik}(v,w)/(v-w)$; for $(i,k,k)$ both are $(W-S_2S_1)c_{ik}(u,v)c_{ik}(u,w)/(u-v)$, with denominators on the left. These two products of coefficients are symmetric in the equal-colour variables, so their divided-difference corrections vanish. For $(i,j,i)$ the longest terms cancel; the identity terms are $-K_{ij}(u,v)/(u-w)$ and $-K_{ij}(w,v)/(u-w)$, giving difference $(K_{ij}(w,v)-K_{ij}(u,v))/(u-w)=0,1,-1,u+w-2v$ in the four unequal cases. When all colours are equal, both words are $-(1-S_1-S_2+S_1S_2+S_2S_1-W)/((u-v)(u-w)(v-w))$. These explicit operator products verify all KLR mixed, quadratic and braid relations of [F2]. This representation is faithful for formal dot coefficients: moving dots right by the proved sliding rule, use quadratic relations to remove repeated simple reflections and braid relations to reduce each crossing word to a chosen reduced word plus shorter words. This terminates by length (and the finite braid moves of [F3] at each fixed length), giving a spanning family $\psi_we(i)$. Each braid correction has fewer crossings and each quadratic reduction removes a pair; divided differences of formal series are formal series, so the same reduction works with formal coefficients. Its leading permutation coefficient is a product of nonzero $c_{ij}$ and of $1/(u-v)$ for equal pairs; proper subwords have smaller permutation length. Maximal-length comparison in the matrix crossed product therefore proves independence of the formal coefficients. Clearing finitely many temporary dot differences is legitimate in this faithful affine calculation. It does not assert faithfulness after taking the cyclotomic quotient. [F1, F2, F3, algebra]

2.1 The mixed and quadratic computations. In the representation of step 1.1, the displayed inverse Hecke element $\psi N-p$ (DG) or $\psi N-P$ (NG) is literally $S(1-\widehat p)-\widehat p$ or $S(1-\widehat P)-\widehat P$ on every word. On unequal colours this follows by cancellation of the right coefficient $N$; on equal colours $\psi=D$ and $D N-1=H$ by the equality $H+1=(S+1)(-N/(u-v))$. For a direct check, write this same inverse operator as $H_{AB}=a_{AB}S+b_{AB}$ with $(h,t)=(1,0)$ in DG and $(q,q-1)$ in NG, $b_{AB}=-(A-B)^{-1}$ in DG and $(1-q)B/(A-B)$ in NG, and $a_{AB}=h-b_{AB}$. Substitution gives $b_{AB}+b_{BA}=t$ and $a_{AB}a_{BA}=h+tb_{AB}-b_{AB}^2$; hence $H^2=tH+h$. Multiplication by $A,B$ gives the mixed relation $Hx_{r+1}-x_rH=1$ in DG, and $HX_rH=qX_{r+1}$ in NG, together with $H^2=1$ or $H^2=(q-1)H+q$. Alternatively the DG mixed constant on an unequal word is $(i_r-i_{r+1}+u-v)p=1$, and on an equal word it is $(u-v)+N=1$; in NG the same spectral substitution gives the stated mixed identity. Commuting dots, distant mixed relations and distant crossings follow because the operators involve disjoint pairs. By step 1.1 these are regular affine-KLR identities and hence evaluate in the nilpotent-dot quotient. [F1, F2, step 1.1, algebra]

3.1 All five Hecke braid patterns. For a triple with distinct colours, adjacent repeated colours $(i,i,k)$ or $(i,k,k)$, outer repeated colours $(i,j,i)$, or all equal colours, the inverse elements of step 2.1 have precisely the same rational Hecke operator $H$ on each successive word. Expansion in the crossed product gives the same six coefficients for both braid words. In the order $1,S_1,S_2,S_1S_2,S_2S_1,S_1S_2S_1$, they are
$$b_{AC}(h+b_{AB}b_{BC}),\quad a_{AB}b_{BC}b_{AC},\quad a_{BC}b_{AB}b_{AC},\quad a_{AB}a_{AC}b_{BC},\quad a_{BC}a_{AC}b_{AB},\quad a_{AB}a_{AC}a_{BC}.$$
For example the first word's constant coefficient is $b_{AB}^2b_{BC}+a_{AB}a_{BA}b_{AC}$ and its $S_1$ coefficient is $a_{AB}(b_{AC}b_{BA}+b_{AB}b_{BC})$; the identities below reduce them to the displayed entries. The other entries follow by choosing the permutation terms in two or three factors; swapping $AB$ and $BC$ treats the other word. These formulas apply to all five patterns because $A,B,C$ are independent spectral variables, even when their colour labels coincide. The required scalar reductions are $b_{AB}+b_{BA}=t$, $a_{AB}a_{BA}=h+tb_{AB}-b_{AB}^2$, and $b_{AB}b_{BC}=b_{AC}(b_{AB}+b_{BC}-t)$, with $(h,t)=(1,0)$ or $(q,q-1)$. In the outer-repeated pattern the KLR braid correction $u+w-2v$ on a double edge was already included in the faithful model of step 1.1, so it is not suppressed by this table. In the equal pattern $D$ accounts for all divided-difference terms. Equality of the six explicit coefficients, followed by faithfulness, proves Hecke braid inside the formal KLR algebra; its regular expressions descend to the cyclotomic quotient. This proves the missing four cases and the all-equal case without assuming any Hecke intertwiner relation in that algebra. [F1, step 1.1, step 2.1, algebra]

4.1 The cyclotomic relation and the homomorphism. The cyclotomic relation $\prod_i(x_1-i)^{\lambda_i}=0$ (respectively $\prod_i(X_1-q^i)^{\lambda_i}=0$) holds because $y_1^{(\Lambda,\alpha_{i_1})}e(i)=0$ is the cyclotomic KLR relation and $x_1=\sum_i(y_1+i_1)e(i)$ (respectively $X_1=\sum_iq^{i_1}(1-y_1)e(i)$) is a shift of the dot. Hence all defining relations of the affine cyclotomic quotient are satisfied, and the universal property of the presentation gives a unique $F$-algebra homomorphism $\sigma\colon H^\Lambda_d\to R^\Lambda_\alpha$ carrying the generators to the displayed elements. [F1, F2, step 2.1, step 3.1, construct]

5.1 Identification of $\sigma(e(i))$. By [F2] the algebra $R^\Lambda_\alpha$ is finite-dimensional, so it becomes a finite-dimensional $H^\Lambda_d$-module through $\sigma$. The simultaneous generalized weight space for $\sigma(x_r)e(i)=(y_r+i_r)e(i)$ in DG, or $\sigma(X_r)e(i)=q^{i_r}(1-y_r)e(i)$ in NG, on $R^\Lambda_\alpha$ is exactly $e(i)R^\Lambda_\alpha$ when $i\in I_\alpha$ and is $0$ otherwise, by the nilpotence of the dots and the weight relation. Hence $\sigma(e(i))$, being the projector onto that generalized weight space for the commuting operators $\sigma(x_1),\dots,\sigma(x_d)$ in DG, or $\sigma(X_1),\dots,\sigma(X_d)$ in NG, equals $e(i)$ for $i\in I_\alpha$ and vanishes otherwise. [F2, step 4.1]

6.1 Factorization through the sector. Since $e_\alpha$ is central and $\sum_\beta e_\beta=1$ in $H^\Lambda_d$ ([[def-cyclotomic-hecke-central-content-sector-notation]]), and since $\sigma$ annihilates all idempotents $e(i)$ with $i\notin I_\alpha$ by step 5.1, the element $\sigma(1-e_\alpha)=0$. Therefore $\sigma$ kills $e_\beta$ for $\beta\ne\alpha$ and every corner $e_\beta H^\Lambda_de_\gamma$ with $(\beta,\gamma)\ne(\alpha,\alpha)$, and it factors through the central summand $H^\Lambda_\alpha=e_\alpha H^\Lambda_de_\alpha$ as a unital homomorphism. [step 5.1, algebra]

7.1 Conclusion. Steps 1.1, 2.1, 3.1 and 4.1 produce the homomorphism $\sigma$ from the verified affine and cyclotomic relations; steps 5.1 and 6.1 identify its action on the content idempotents and show that it kills all other sector corners, restricting to a unital homomorphism $H^\Lambda_\alpha\to R^\Lambda_\alpha$. No choice principle is used. [step 4.1, step 6.1] ∎

## Remarks

The scalar normalization is checked before the KLR-to-Hecke calculation. The rational model is faithful only before quotient; the identities evaluated in the cyclotomic algebra contain no inverted equal-colour dot differences.
