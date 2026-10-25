---
id: "prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers"
kind: "proposition"
title: "Ordinary homology theories have mayer vietoris for cw covers"
deps: ["prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Axioms for Homology, Mayer–Vietoris derivation p.162"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Axioms for Homology, Mayer–Vietoris derivation p.162"
    - title: "Miller, Algebraic Topology I lecture notes, Lemma 11.6, pp.27–28"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf"
      locator: "Lemma 11.6, pp.27–28"
    - title: "May, A Concise Course in Algebraic Topology, 14§5, first Mayer–Vietoris theorem pp.112–113"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§5, first Mayer–Vietoris theorem pp.112–113"
status: published
origin: "pipeline"
proof_strategy: "Derive the relative excision isomorphism and compare the two pair LES; prove the every-third-vertical-isomorphism diagram chase from Miller inline. Handle relative covers by quotient/triple exactness. No singular-chain construction is used."
---

## Statement

Let $X=U\cup V$ be a cover by CW subcomplexes and $W=U\cap V$. Every ordinary homology theory has a natural exact sequence
$$\cdots\to h_n(W)\xrightarrow{(i_*,-j_*)}h_n(U)\oplus h_n(V)\xrightarrow{a_*+b_*}h_n(X)\xrightarrow{\Delta}h_{n-1}(W)\to\cdots,$$
where all four maps $i,j,a,b$ are inclusions. The same sequence holds for a CW pair $(X,C)$ covered by $(U,C\cap U)$ and $(V,C\cap V)$, with the corresponding relative groups.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Ordinary unreduced theories on CW pairs and reduced ordinary theories on based CW spaces with vertex basepoints determine one another, naturally and compatibly with morphisms and coefficients. For $A\ne\varnothing$ the correspondence gives $h_n(X,A)\cong\widetilde h_n(X/A)$; for $A=\varnothing$ it gives $h_n(X)\cong\widetilde h_n(X_+)$, where $X_+=X\sqcup\{*\}$. Under this correspondence, pair boundaries are cofiber boundaries followed by inverse suspension, and arbitrary disjoint-sum additivity corresponds to arbitrary wedge additivity. For a CW triple $B\subset A\subset X$ there is a natural exact sequence $\cdots\to h_n(A,B)\to h_n(X,B)\to h_n(X,A)\to h_{n-1}(A,B)\to\cdots$, whose last map is the pair boundary followed by $h_{n-1}(A)\to h_{n-1}(A,B)$. ([[prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs]])

## Proof

1.1 Let $q_U:h_n(U)\to h_n(U,W)$ and $q_V:h_n(X)\to h_n(X,V)$ be the pair maps, and let $e:h_n(U,W)\to h_n(X,V)$ be the excision isomorphism. F1 supplies these pair sequences and their naturality, including $\partial_Ve=j_*\partial_U$. Define $\Delta=\partial_Ue^{-1}q_V$. The three successive composites in the asserted sequence vanish by these identities and pair exactness. [F1]

2.1 If $\Delta x=0$, write $z=e^{-1}q_Vx$. Then $\partial_Uz=0$, so $z=q_Uu$ for some $u\in h_n(U)$. Thus $q_V(x-a_*u)=0$, giving $x-a_*u=b_*v$ for some $v\in h_n(V)$. This proves exactness at $h_n(X)$. [F1, step 1.1]

2.2 If $a_*u+b_*v=0$, then $eq_Uu=0$, so $u=i_*w$. Now $b_*(j_*w+v)=0$, hence $j_*w+v=\partial_Vt$ for some $t\in h_{n+1}(X,V)$. Write $t=ez$. Then $j_*w+v=j_*\partial_Uz$. Set $w'=w-\partial_Uz$. Pair exactness gives $i_*w'=u$ and the displayed equation gives $-j_*w'=v$. This proves exactness at the direct sum. [F1, step 1.1]

2.3 If $i_*w=j_*w=0$, choose $z\in h_{n+1}(U,W)$ with $\partial_Uz=w$. Then $\partial_Vez=j_*w=0$, so $ez=q_Vx$ for some $x\in h_{n+1}(X)$. Consequently $\Delta x=w$, proving exactness at $h_n(W)$. All the maps defining $\Delta$ are natural, including the inverse of the natural isomorphism $e$, so this is a natural sequence. [F1, step 1.1]

3.1 For a subcomplex $C$, work in the based quotient $X_+/C_+$ with its cover by the images of $U_+$ and $V_+$. These are the based quotients by $(C\cap U)_+$ and $(C\cap V)_+$; their intersection is $W_+/(C\cap W)_+$. Use the reduced version of the same chase, or subtract the split basepoint sequence from the unreduced one. The quotient identification in F1 converts every term to the asserted relative term. Empty members, empty intersections, and $C=X$ give the corresponding zero terms without changing the chase. [F1, step 2.1, step 2.2, step 2.3] ∎
