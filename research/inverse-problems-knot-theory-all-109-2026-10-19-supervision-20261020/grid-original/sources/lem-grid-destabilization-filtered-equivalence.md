---
id: lem-grid-destabilization-filtered-equivalence
kind: lemma
title: "Explicit inverse homotopies for filtered grid destabilization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - alg-grid-knot-floer-complex
  - lem-grid-rectangle-boundary-square-zero-and-filtration
  - lem-grid-rectangle-differential-squares-to-zero
  - lem-grid-filtered-destabilization-domain-map
  - lem-finite-filtered-cone-contraction-lifts
  - lem-pointed-basepoint-cone-and-variable-collapse
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Lemmas 5.2.18–5.2.19, Proposition 5.2.17, §13.3, and Appendix A.8; graded contraction and filtered lifting"
---

## Statement

For a southwest $X$ stabilization, the incoming-domain map from the full filtered grid complex to the cone of $U_1+U_2$ on the polynomial extension of the smaller grid complex is a filtered chain homotopy equivalence over the full polynomial ring. Its inverse and both inverse homotopies can be computed by finite polynomial matrix formulas from empty rectangles and incoming domains. Composing with the explicit cone retraction gives filtered equivalence with the smaller complex over any retained old variable action, without imposing relations on its other variables. After simultaneous ordinary collapse of the marking variables, stabilization contributes the zero-differential factor $V$ of bidegrees $(0,0)$ and $(-1,-1)$. The same $V$ factor occurs on tilde homology.

## Statement references

[[alg-grid-knot-floer-complex]]

[[lem-grid-filtered-destabilization-domain-map]]

[[lem-finite-filtered-cone-contraction-lifts]]

[[lem-pointed-basepoint-cone-and-variable-collapse]]

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, §§5.2 and 13.3](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** Use the marking positions and labels of the incoming-domain map. Let $I$ be states containing the new intersection $c$, and $N$ the other states. In this proof only, a subscript zero denotes Alexander-associated-graded differentials and maps.

[F1] [[lem-grid-filtered-destabilization-domain-map]] proves that $D$ is filtered and is a chain map, with associated-graded map given by deletion of $c$ and rectangles through $X_2$ alone.

[F2] [[lem-grid-rectangle-boundary-square-zero-and-filtration]] pairs nonreturning two-rectangle decompositions and describes the unique returning thin-annulus decompositions.

[F3] [[lem-grid-rectangle-differential-squares-to-zero]] proves that both full and associated-graded grid operators are differentials.

[F4] [[lem-finite-filtered-cone-contraction-lifts]] gives an explicit finite series lifting a graded cone contraction and extracts the inverse and inverse homotopies from its blocks.

[F5] [[lem-pointed-basepoint-cone-and-variable-collapse]] gives the filtered cone retraction over retained old variables, and the extra factor after ordinary scalar collapse.

## Proof

1.1 For the associated-graded differential, $N$ is a subcomplex: a rectangle from $N$ to $I$ necessarily crosses $X_1$ or $X_2$, as its two sides terminating at $c$ surround one of the two adjacent $X$ cells. Thus the graded stabilized complex has differential $(d_I a,d_N b+\alpha a)$ on $I\oplus N$. Deleting $c$ identifies $(I,d_I)$ with the smaller associated-graded complex shifted down by one in both gradings; rectangles avoiding $X$ correspond under this deletion and cannot contain $O_1$. Let $B$ denote the smaller complex with the new polynomial variable adjoined and without that shift. [F1, F3, given, construct]

2.1 Define $p:N\to B$ by counting rectangles ending in $I$ and containing $X_2$ and no other $X$, then deleting $c$, with all $O$ powers included. Define $i:B\to N$ by adjoining $c$ and counting rectangles containing $O_1$ and no $X$, omitting the $U_1$ power. Define $k:N\to N$ by rectangles containing both $O_1,X_2$ and no other $X$, again omitting $U_1$. The same grading changes as in [F1] make $p,i$ degree zero and $k$ degree $(1,0)$. For $d_Bp+pd_N$, a nonreturning domain has its two alternative cuts from [F2], with the unique selected $X_2$ in either cut; there are no returning domains between the disjoint endpoint sets $N,I$. Hence $p$ is a chain map. [F1, F2, step 1.1, construct]

3.1 The composition $pi$ counts pairs of rectangles joining $I$ back to $I$, with one through $O_1$ and the other through $X_2$. The marked-cell positions and the state point $c$ force their union to be the thin vertical annulus through those two cells. For each input state it has one permissible cut; no other state point lies inside its pieces. The omitted $U_1$ power leaves weight one. Therefore $pi=1$. In $ip+d_Nk+kd_N$, nonreturning domains have the alternative two cuts from [F2], preserving their selected marked multiplicities, and cancel. Returning domains must contain both $O_1$ and $X_2$, so the same vertical thin annulus is the only possibility. For an input in $N$, its unique cut places it in exactly one of the three summands according to the positions of its points on the two boundary circles. Its weight is again one. Hence $ip+d_Nk+kd_N=1_N$. Since $p$ is a chain map, commuting the last identity with $d_N$ gives $(d_Ni+id_B)p=0$; right-composition with $i$ and $pi=1$ proves that $i$ is a chain map as well. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 Put $P_N=1+ip$ and $k'=P_NkP_N$. These are explicit finite polynomial matrices. Since $pi=1$, $P_N$ is an idempotent chain map, $pk'=0$, and $k'i=0$. The identity in step 3.1 implies $d_Nk'+k'd_N=P_N$. In the first coordinate of [F1]'s graded target, use the identification of $I$ with the shifted copy of $B$. Under this identification, $D_0(a,b)=(a,pb)$, and its target has cone differential $(d_Ia,d_B b+fa)$ with $f=U_1+U_2$. The chain-map identity already proved in [F1] gives $p\alpha=f$. [F1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Define $S_0(a,b)=(a,ib+k'\alpha a)$ and $K_0(a,b)=(0,k'b)$. Direct matrix multiplication, using $p\alpha=f$ and $d_Nk'+k'd_N=1+ip$, gives $d_{G',0}S_0=S_0d_{\mathrm{cone},0}$, $D_0S_0=1$, and $S_0D_0+1=d_{G',0}K_0+K_0d_{G',0}$. Also $D_0K_0=0$. Every map has the degrees required of a graded equivalence or homotopy: $\alpha$ lowers Maslov degree by one and has filtration degree zero, and $k'$ has degree $(1,0)$. Thus this is an explicit associated-graded contraction. [step 4.1, construct, algebra]

6.1 On the cone of $D_0$, whose underlying module is $C_{G',0}[1]\oplus B_{\mathrm{cone},0}$, define $h_0(c,b)=(K_0c+S_0b,0)$. The identities in step 5.1 give $\delta_0h_0+h_0\delta_0=1$: its first component is $(dK_0+K_0d+S_0D_0)c=c$, with the terms in $b$ cancelling because $S_0$ is a chain map; its second component is $D_0K_0c+D_0S_0b=b$. This is the explicit Alexander-preserving cone contraction to which [F4] applies. [step 5.1, construct, algebra]

7.1 Use the same bases for the actual filtered cone of $D$. Its differential is $\delta_0+\Delta$, with $\Delta$ strictly lowering Alexander degree, by [F1] and the rectangle filtration formula. Each variable has Maslov degree $-2$ and there are finitely many state and cone generators. In a fixed Maslov degree, only finitely many monomials can occur: their total exponent is fixed by the degree of their basis generator. Hence there are finitely many Alexander levels and a finite lower bound in that degree. Apply [F4] to $h_0$. The resulting finite series $h=h_0\sum_r(\Delta h_0)^r$ contracts the actual cone; its upper-right block is the required filtered inverse, and its diagonal blocks are the two inverse homotopies. Each polynomial entry is a finite sum of words of the rectangle and incoming-domain counts already defined. [F1, F4, step 6.1, construct, algebra]

8.1 Compose $D$ with [F5]'s cone retraction to the old complex, restricting the ring action to the old variables. The preceding maps supply a filtered chain homotopy equivalence, including inverse homotopies. Alternatively, tensor the full-ring equivalence of step 7.1 with the ordinary simultaneous quotient. The cone map $U_1+U_2$ becomes zero, so its quotient is the collapsed old complex tensored with $V$. Taking the associated graded before putting every variable equal to zero gives the same direct-sum shift and therefore the tilde $V$ factor. Both claims follow from explicit chain homotopies and scalar quotients, not from commuting homology with a nonflat tensor product. [F5, step 7.1, algebra] ∎
