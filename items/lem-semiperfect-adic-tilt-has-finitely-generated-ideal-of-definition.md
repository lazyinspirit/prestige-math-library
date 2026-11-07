---
dependency_level: 3
id: lem-semiperfect-adic-tilt-has-finitely-generated-ideal-of-definition
kind: lemma
title: A semiperfect adic tilt has a finite ideal of definition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-dependent-choice
- def-perfectoid-field-and-its-tilt
- lem-finite-ideal-adic-completeness-in-a-complete-linear-topology
- lem-complete-filtered-map-surjective-from-graded-surjectivity
- lem-semiperfectness-modulo-a-pseudouniformizer-implies-modulo-p
- lem-determinant-trick-for-nakayama
- prop-units-in-an-adically-complete-ring
proof_strategy: direct
sources:
  references:
  - title: Peter Schneider, The perfectoid open unit disk (2015), §1; complete local
      reconstruction of the adic and filtered arguments
    url: https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf
---

## Statement

Assume Dependent Choice. Let $K$ be a perfectoid field of residue characteristic $p$, and choose $0<|\varpi|_K<1$ with $p\in\varpi^2K^\circ$. Let $S$ be a commutative $K^\circ$-algebra complete and Hausdorff for a finitely generated ideal $I$ containing $\varpi$. Suppose Frobenius on $S/\varpi S$ is surjective and the ideal $\ker(F:S/I\to S/I)$ is finitely generated. Put $I_1=\{s\in S:s^p\in I\}$, and give $S/\varpi S$ its quotient $I$-adic topology. Form
$$A=\varprojlim_F S/\varpi S,\qquad U=\{(x_0,x_1,\ldots)\in A:x_0\in I_1/\varpi S\}.$$
Then $A$ is a perfect $\mathbb F_p$-algebra, is Hausdorff and complete in its inverse-limit topology, and $U$ is a finitely generated ideal defining that topology: $A$ is $U$-adically complete and Hausdorff. Moreover reduction induces a multiplicative uniform homeomorphism $\varprojlim_{z\mapsto z^p}S\to A$, where the source has the subspace uniformity of $S^{\mathbb N}$. No flatness, Noetherian hypothesis or Hausdorff assumption on $S/\varpi S$ is imposed.

## Statement references

[Schneider, The perfectoid open unit disk, §1](https://www.uni-muenster.de/FB10/u/pschnei/publ/misc/perfectoid-disk.pdf)

## Facts & Assumptions

**Given:** Dependent Choice and the objects and hypotheses of the Statement.

[A1] Dependent Choice supplies a sequence of successive choices from a serial relation. ([[def-dependent-choice]])

[F1] In a complete Hausdorff countably linearly topologized ring, any finitely generated ideal whose powers tend to zero defines a complete Hausdorff adic topology. ([[lem-finite-ideal-adic-completeness-in-a-complete-linear-topology]])

[F2] A filtration-preserving homomorphism from a complete separated countably filtered abelian group to a separated one is surjective if all its graded maps are surjective. ([[lem-complete-filtered-map-surjective-from-graded-surjectivity]])

[F3] In the stated complete $K^\circ$-algebra setting, Frobenius surjectivity modulo $\varpi$ implies surjectivity modulo $p$, including characteristic $p$. ([[lem-semiperfectness-modulo-a-pseudouniformizer-implies-modulo-p]], [[def-perfectoid-field-and-its-tilt]])

[F4] If a finitely generated module $M$ satisfies $IM=M$, then $(1-a)M=0$ for some $a\in I$. Elements congruent to $1$ modulo an ideal of adic completeness are units. These statements do not require AC. ([[lem-determinant-trick-for-nakayama]], [[prop-units-in-an-adically-complete-ring]])

## Proof

1.1 Write $C=S/\varpi S$. Since $p\in\varpi S$, $C$ is an $\mathbb F_p$-algebra and Frobenius is a ring map. On $A$ its coordinatewise Frobenius $\Phi$ is an automorphism with inverse the left shift $(x_n)\mapsto(x_{n+1})$; both maps are continuous for the inverse-limit topology. By [F1] with the principal ideal $(\varpi)\subseteq I$, $S$ is also complete and Hausdorff for its $\varpi$-adic topology. [given, F1, algebra]

2.1 For $x\in A$, choose lifts $a_n\in S$ of its coordinates under [A1]. Consecutive lifts satisfy $a_{n+1}^p-a_n\in\varpi S$. If $u-v\in\varpi S$, then $u^{p^n}-v^{p^n}\in\varpi^{n+1}S$: the term of index $k$ in the binomial expansion is divisible by $p^{n-v_p(k)}\varpi^k$, and $n-v_p(k)+k\ge n+1$; the last term is divisible by $\varpi^{p^n}$ with $p^n\ge n+1$. Thus the sequence $a_n^{p^n}$ is $\varpi$-adically Cauchy and has a limit $x^\sharp$. The same estimate for two lifts at level $n$ shows independence of all choices, and gives $x^\sharp-a_n^{p^n}\in\varpi^{n+1}S$. Products of chosen lifts show that $\sharp$ is multiplicative. [A1, F1, step 1.1, choose, construct, algebra]

3.1 Reduction maps an exact root sequence $(z_n)$ in $S$, with $z_{n+1}^p=z_n$, into $A$. The inverse is $x\mapsto((\Phi^{-n}x)^\sharp)_{n\ge0}$: powers and the limit in step 2.1 give the root relation, and reduction gives back $x_n$. Conversely an exact root sequence has constant sharp approximants $z_{n+j}^{p^j}=z_n$, so sharp after reduction recovers it. This proves the claimed multiplicative bijection. It is uniformly continuous in both directions. Reduction is coordinatewise uniformly continuous. For the other direction, fix a coordinate $k$ and an ideal $I^N$; write $\overline{I^N}=(I^N+\varpi S)/\varpi S$ for its image in $C$ and choose $n\ge N$. If the $(k+n)$th coordinates of $x,y$ differ by an element of $\overline{I^N}$, choose lifts there differing in $I^N$. Their $p^n$th powers differ in $I^N$, and the two sharp errors belong to $\varpi^{n+1}S\subseteq I^N$. Thus the $k$th exact root coordinates differ in $I^N$, uniformly in $x,y$. [step 1.1, step 2.1, algebra, construct]

4.1 The product uniform space $S^{\mathbb N}$ is complete: a Cauchy sequence has a limit in every coordinate, and finite-coordinate neighborhoods give convergence in the product. The exact-root subset is closed, because each equation $z_{n+1}^p-z_n=0$ is a continuous equation in the Hausdorff ring $S$. Hence that subset is complete and Hausdorff. The uniform homeomorphism in step 3.1 makes $A$ complete and Hausdorff. Its topology has a countable basis of ideals, inherited from the coordinate quotient ideals. For a compatible system of classes modulo that basis, [A1] chooses representatives forming a Cauchy sequence; its limit represents every class because the open ideals are closed. Thus completeness also has the inverse-limit meaning required by [F1]. No separatedness of $C$ was used. If $I_1=0$, then $I=0$, $\varpi S=0$ and $pS=0$; the assumed surjective Frobenius on $S$ has kernel zero. Thus $S$ is perfect with discrete topology, $A\cong S$ discretely and $U=0$, proving the conclusion in this case. [A1, given, step 3.1, algebra]

5.1 Now suppose $I_1\ne0$. It is finitely generated: it is the inverse image of the given finite kernel ideal in $S/I$, and $I$ itself is finitely generated. By [F3], Frobenius on $S/pS$ is surjective. Since $p\in\varpi^2S\subseteq I^2$, Frobenius is consequently surjective on $S/I^2$. Choose generators $a_1,\ldots,a_m$ of $I$ and $t_j$ with $a_j-t_j^p\in I^2$. Put $Q=(t_1^p,\ldots,t_m^p)$. Then $Q\subseteq I$ and $I=Q+I^2$. For the finite module $M=I/Q$, this says $IM=M$. By [F4], $(1-a)M=0$ with $a\in I$; since $1-a$ is a unit by the same fact, $M=0$. Therefore $I=Q$. Extend the list $t_j$ to a finite list $s_1,\ldots,s_r$ generating $I_1$, with $r\ge1$. All added $p$th powers lie in $I$, so $$I=(s_1^p,\ldots,s_r^p),\qquad I_1=(s_1,\ldots,s_r).$$ The inclusions $I\subseteq I_1$ and $I_1^{rp}\subseteq I$, by the pigeonhole principle on monomials, show that the $I$-adic and $I_1$-adic topologies agree. [A1, F3, F4, step 4.1, given, choose, algebra]

6.1 The ideal $U$ is open, since $I_1$ contains the open ideal $I$. Put $U_n=\Phi^n(U)$. These are open ideals and form a decreasing neighborhood basis. To see the decrease, if $s\in I_1$ then $s^p\in I\subseteq I_1$. To prove cofinality, fix an original coordinate neighborhood requiring coordinate $i$ to belong to $\overline{I^N}$. For $x=\Phi^ny$ with $y\in U$ and $n\ge i+1$, its $i$th coordinate is $y_0^{p^{n-i}}$, which lies in the image of $I^{p^{n-i-1}}$ in $C$ because a lift of $y_0$ lies in $I_1$. This is contained in the required ideal for all large $n$. Finitely many coordinate requirements can be met at once. Consequently $\bigcap_nU_n=0$ by step 4.1. [step 1.1, step 4.1, step 5.1, algebra]

6.2 Frobenius on $C$ is surjective, so under [A1] lift each $s_j\bmod\varpi S$ to an element $\sigma_j\in A$. Put $J=(\sigma_1,\ldots,\sigma_r)\subseteq U$. The map $J\to U/\Phi(U)$ is surjective. Indeed for $x\in U$, express $x_0=\sum_jc_{j,0}\sigma_{j,0}$ in $C$, lift each coefficient $c_{j,0}$ to $c_j\in A$ using surjective Frobenius, and put $\beta=x-\sum_jc_j\sigma_j$. Then $\beta_0=0$, so $\beta_1^p=0$ in $C$. A lift of $\beta_1$ therefore has $p$th power in $\varpi S\subseteq I$, and hence lies in $I_1$. Thus $\Phi^{-1}\beta\in U$, or $\beta\in\Phi(U)$, as required. [A1, step 1.1, step 5.1, choose, construct, algebra]

7.1 For each $n\ge0$, the ideal $\Phi^n(J)$ is generated by $\sigma_j^{p^n}$, and $$J^{rp^n}\subseteq\Phi^n(J)\subseteq J^{p^n}.$$ The first inclusion is the monomial pigeonhole principle and the second follows from the displayed generators. Since $\Phi^n(J)\subseteq U_n$ and the $U_n$ tend to zero, the powers of $J$ tend to zero in the original topology of $A$. By [F1] and step 4.1, $A$ is complete Hausdorff for its $J$-adic topology. The ideal $J$ is open and closed in that topology, so is complete, and the displayed inclusions make it complete for the filtration $\Phi^n(J)$ as well. Apply $\Phi^n$ to the surjectivity in step 6.2 to see that the inclusion $J\hookrightarrow U$ induces surjections $\Phi^n(J)/\Phi^{n+1}(J)\to U_n/U_{n+1}$ for all $n$. The target filtration is separated by step 6.1. Therefore [F2] gives $J=U$. [F1, F2, step 4.1, step 6.1, step 6.2, algebra]

8.1 In particular $U$ is finitely generated. With $J=U$, the inclusions in step 7.1 show that its powers and the basis $U_n$ define the same topology: $U^{rp^n}\subseteq U_n\subseteq U^{p^n}$. This topology is complete and Hausdorff by step 4.1, or directly by [F1]. The construction and all infinite lift choices used only [A1], while finite generation was proved through the choice-free determinant trick and geometric-series unit argument. No almost-module equivalence, affinoid sheaf theorem or formal-generic-fiber perfectoidness has been inferred. [A1, F1, step 4.1, step 7.1, algebra] ∎
