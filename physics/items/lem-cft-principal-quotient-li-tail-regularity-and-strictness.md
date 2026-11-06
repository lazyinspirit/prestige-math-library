---
id: lem-cft-principal-quotient-li-tail-regularity-and-strictness
kind: lemma
title: Quantum principal quotient Li tails and strict degree-zero reduction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
axiom_use: ZF + AC
deps:
  - def-axiom-of-choice
  - def-cft-affine-w-algebra-via-brst
  - thm-cft-affine-w-brst-pbw
  - lem-cft-equivariant-arc-module-classical-brst-exactness
  - lem-affine-vacuum-module-pbw-basis
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cft-affine-w-algebra-via-brst: mathematical-premise
  thm-cft-affine-w-brst-pbw: mathematical-premise
  lem-cft-equivariant-arc-module-classical-brst-exactness: mathematical-premise
  lem-affine-vacuum-module-pbw-basis: mathematical-premise
  lem-pbw-for-countably-presented-kac-moody-lie-algebras: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Associated varieties of modules over Kac–Moody algebras and C2-cofiniteness of W-algebras
      url: https://arxiv.org/pdf/1004.1554
      locator: Retrieved v5, sections 4.3–4.5; the explicit finite-top PBW contraction, increasing-bottom resolution and adjusted double filtration below supply the required convergence and truncation arguments.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 6
---

## Statement

Assume AC and a principal integral Dynkin grading for a finite-dimensional complex simple Lie algebra. Use the actual charged-ghost principal BRST complex C(M), with character at negative loop mode -1, and its tensor Li filtration F. Let M be a smooth level-k affine module with an integer loop grading bounded below, finite-dimensional graded pieces and locally finite finite-g action; currents x[n] lower the loop grade by n. Suppose M is finitely generated as an affine module. For every improved conformal weight d, there is P(d) such that $H^0(F^p C(M))_d=0$ for $p\ge P(d)$. For every $p\ge 0, H^1(F^p C(M))=0$. Consequently the actual degree-zero cohomology, with its induced filtration, satisfies

    $\operatorname{gr}_F H^0(C(M)) = H^0(\operatorname{gr}_F C(M))$.

For a vertex-algebra quotient V of the universal affine vacuum algebra, the actual map $W^k$ to $H^0(C(V))$ is a strict surjection, the induced filtration on $H^0(C(V))$ is its intrinsic Li filtration, and

    $R_{(H^0(C(V)))} = (R_V / \text{moment constraints})^n$.

Here $R_A=A/C2(A)$, with C2 spanned by $a_{(-2)}b$. All equalities are algebraic filtered or Poisson algebra identifications, including the possibility that the reduction is zero. No nonzero-reduction, simple-quotient classification, negative-degree BRST vanishing, C2-cofiniteness or rationality conclusion is asserted by this lemma alone.

## Statement references

[[def-cft-affine-w-algebra-via-brst]]

[[thm-cft-affine-w-brst-pbw]]

[[lem-cft-equivariant-arc-module-classical-brst-exactness]]

[[lem-affine-vacuum-module-pbw-basis]]

[[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The precise bounded loop grading and principal integral-grading hypotheses in the Statement. The improved grading is loop energy minus h/2, including the ghost action; it is preserved by the BRST differential.

[F1] [[def-cft-affine-w-algebra-via-brst]] supplies the actual modes, polarization and odd BRST zero-mode. [[thm-cft-affine-w-brst-pbw]] proves square-zero and, in its proof steps 4.2, 5.2, 6.3, 7.2 and 8.1–10.2, constructs the actual negative-constraint chain contraction and quotient by the pairs b and $\theta=db$. Those constructions will be applied only where PBW freeness is verified below, and their preservation of decreasing Li is proved explicitly. Its public Kazhdan Statement is not substituted for a Li comparison.

[F2] [[lem-affine-vacuum-module-pbw-basis]] and [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]] provide the ordered negative-current vector-space factorization. Every word and coproduct used below has finite support.

[F3] [[lem-cft-equivariant-arc-module-classical-brst-exactness]] proves the actual restricted classical constraint/Chevalley comparison and exactness on coherent equivariant finite-jet modules and their unions, including modules rather than just quotient coordinate algebras.

[A1] [[def-axiom-of-choice]] permits the ordinary module/basis choices in the PBW constructions and is retained through F3's completion interfaces. No minimal choice-strength claim is made.

## Proof

**Given:** F1–F3 and A1. All totalizations are algebraic direct sums.

1.1 Let E be a finite-dimensional graded g[t]-module on which sufficiently high modes vanish, positive modes lower the given loop grading, and the finite g acts locally finitely. Put $P(E)=U(affine) \otimes_{U(g[t]+CK)} E$ at level k. PBW gives $P(E)=U(g[t^{-1}]t^{-1}) \otimes E$. Order the negative n currents first. For the BRST splitting $d=d_-+d_+$ of $F1, d_-$ is the negative-n Lie chain differential with its actual character $\lambda(u[-r])=\delta_{(r,1)} \chi(u)$, while $d_+$ increases the c-creation count by one. The coefficient module is genuinely free over negative n: its other PBW words and E form the coefficient space. Tensoring the c ghosts preserves this freeness by the finite Hopf untwisting u tensor v maps to $\sum u_{(1)} \otimes u_{(2)}v$, with antipode inverse. Thus F1's explicit chain contraction applies to P(E); no quotient module has been declared free. The same character-mode indexing is used throughout. [given, F1, F2, construct, algebra]

2.1 This contraction preserves decreasing Li. Give a negative current x[-r] and its b[-r] partner derivative count r-1, and give a c[-s] creation derivative count $s, s\ge 0$. E has count zero. The leading chain homotopy replaces x[-r] by b[-r] with the same count. A current or chain-bracket commutator replaces two negative letters of orders r,s by one of order r+s, increasing count by one; a nonzero character term removes only an order-one letter, of count zero. A nontrivial Hopf correction lets x[-r] act on a c[-s] as a c creation of order r+s; its count r+s exceeds (r-1)+s by one. The antipode inverse has the same property. The corrected chain homotopy is the finite PBW-length-lowering geometric series of F1, and therefore also preserves every $F^p$. The final perturbation by $d_+$ is finite on each vector: use old energy with currents and b states of weight one, c states of weight zero and derivatives adding one. On each old-energy bound, E is finite and there are only finitely many exterior c-zero modes, so c-count is bounded; $d_+$ followed by the chain homotopy raises that count. All these operators preserve the old-energy bound, with the character term lowering it. Consequently the full-to-relative projection and its homotopies are filtered for Li and preserve improved weight. The projection is the actual vector-space quotient by b[-r] and $\theta[-r], \theta=db$, as in F1. [F1, F2, step 1.1, construct, algebra]

3.1 The relative space has a filtered PBW basis consisting of E, negative currents from g/n and the c creations. Indeed replacing a constrained current by theta plus its quadratic ghost expression is an invertible triangular PBW basis change; both it and its inverse preserve derivative count, since theta as a state is a current plus a normally ordered bc term and a scalar. Its derivatives have the corresponding derivative counts. Commutator reorderings only increase count. The residual current of grade $j\le 0$ has improved state weight $1-j\ge 1$, and a c state dual to grade $j>0$ has weight $j\ge 1$; every derivative adds one. E has only finitely many improved weights. Thus each relative improved-weight space is finite-dimensional, and its Li filtration is zero when $p>d-\operatorname{min}(weight(E))$. The associated Li-symbol differential is exactly the classical one of F3: db is the moment constraint plus the ghost action, dc is the Lie bracket ghost quadratic, and $dJ^x$ is the current-adjoint term plus k(u,x) derivative(c). The last term has one extra Li degree and disappears in the symbol; brackets, cubic ghost signs and the order-one character are exactly those in F1. No level term or completed cochain is retained. F3 therefore gives associated-graded cohomology only in degree zero. Finite descending-filtration lifting in each relative improved-weight space proves $H^i(C(P(E)))=0$ for i different from zero, $H^i(F^p C(P(E)))=0$ for i different from zero and every p, and $H^0(F^p C(P(E)))_d=0$ for p sufficiently large. Transfer to the full complex is legitimate by the filtered homotopies in step 2.1. [F1, F2, F3, step 2.1, construct, algebra]

4.1 We now prove positive BRST vanishing without assuming finite-old-energy truncated induced complexes are acyclic. For any bounded-below module Q in the stated loop-graded class, induce its entire g[t]-module: $P_0=P(Q)$, with evaluation to Q. Its kernel $K_0$ has lowest loop grade at least one more than Q: in the lowest grade PBW has only its length-zero copy of Q, and evaluation is the identity there. Inductively set $P_j=P(K_{(j-1)})$ and let $K_j$ be its evaluation kernel. Then the lower loop bound of $P_j$ increases at least by j. Each coefficient module is a union of finite-dimensional g[t]-stable graded subspaces, so $P_j$ is a filtered union of the finite-top induced modules of step 3.1. BRST cohomology commutes with this union on finite cochain representatives; hence $H^i(C(P_j))=0$ for i different from zero. The augmented total complex Tot $C(P_*)$ to C(Q) is a quasi-isomorphism: on any fixed old-energy bound only finitely many resolution columns occur, because their lower bounds increase, and the horizontal resolution remains exact grade by grade; the vertical differential does not increase old energy. Finite horizontal-complex lifting proves the augmentation assertion on that bound, and then on their union. If a total cocycle has positive total degree and largest occupied resolution column j, its component there has vertical degree $total+j>0$ and is a vertical boundary by the just-proved induced-module result. Subtract its total primitive, which removes that column and introduces only smaller columns. Finitely many repetitions remove the cocycle. Therefore $H^i(C(Q))=0$ for all $i>0$, and $H^0$ is right exact. The argument uses full induced cohomology in the last-column elimination, never an acyclicity claim on old-energy truncations. [F1, F2, step 3.1, construct, algebra]

5.1 For any compatible decreasing filtration Gamma on Q, the actual symbol complex $\operatorname{gr}_{\Gamma} C(Q)$ is the classical complex of F3 with coefficient $\operatorname{gr}_{\Gamma} Q$: the mode and Li-symbol check is the one in step 3.1. Its finite-stage module condition is verified as follows. Old-loop homogeneous spaces of Q are finite, Gamma is separated on each such space, and positive g[t] modes lower old grade. A finite set of symbols therefore has a finite-dimensional g[t]-stable span E. For m large enough to annihilate E by modes above $m, R_m E$ is a finite equivariant module over the polynomial finite-jet ring. These modules exhaust $\operatorname{gr}_{\Gamma} Q$, and their positive-root BCH actions are finite on each vector. The same argument applies to compatible submodule filtrations and to the double symbols below. Thus F3 applies to the actual modules used here, not only to a hypothetical arc algebra of a C2 quotient. In particular $H^i(\operatorname{gr}_{\Gamma} C(Q))=0$ for i different from zero. The finite filtration on $C(Q)/\Gamma^p C(Q)$ then gives $H^i$ of that quotient zero for i different from zero, and identifies its associated graded degree-zero cohomology with the sum of the symbol cohomologies of indices below p. [F3, step 4.1, construct, algebra]

6.1 First take $\Gamma=F$. For finitely generated Q choose finitely many homogeneous affine generators and let E be their finite-dimensional g[t]-stable span. The resulting P(E) to Q is surjective and is strict for intrinsic module Li: every Li spanning monomial with a coefficient vector in Q lifts its coefficient vector to P(E), giving both inclusions. Give its kernel the induced filtration. The symbol short exact sequence and F3, followed by the finite-truncation argument of step 5.1, imply that $H^0(C(P(E))/F^p)$ to $H^0(C(Q)/F^p)$ is surjective. Step 3.1 makes $H^0(C(P(E)))$ to its truncation surjective, since $H^1(F^p C(P(E)))=0$. The commutative square with Q therefore proves $H^0(C(Q))$ to $H^0(C(Q)/F^p)$ surjective. For an arbitrary Q, exhaust it by finitely generated graded submodules; intrinsic Li and the cochain complexes commute with this union because every spanning monomial is finite. The same conclusion follows on representatives. [F3, step 5.1, construct, algebra]

7.1 Extend this surjectivity from F to any compatible Gamma. Compatibility and its degree-zero normalization imply $F^p Q$ subset $\Gamma^p Q$. On $U=\operatorname{gr}_F Q$ introduce the adjusted difference filtration $D^s U$: in Li degree r its piece is the symbol of $F^r Q$ intersect $\Gamma^{r+s} Q$; put $D^s=U$ for $s\le 0$. This is an R-module and g[t]-stable submodule: a derivative-current multiplication raises both indices by the same amount, and $x[n], n\ge 0$, lowers both by n. These statements are exactly the two compatibility inequalities, so their difference is preserved. F3 consequently makes classical reduction exact on $D^s U, U$ and $U/D^s U$. In total Li degree r, the symbol of $\Gamma^p C(Q)$ is precisely the classical complex of $D^{p-r} U$ in that degree: ghost Gamma and Li counts agree, so their contributions cancel in the difference index. This gives higher cohomology zero for $\operatorname{gr}_F(C(Q)/\Gamma^p)$ and a surjection from $H^0(\operatorname{gr}_F C(Q))$ to its cohomology. Since both $C/F^p$ and $C/\Gamma^p$ have finite F filtrations, finite symbol lifting now proves $H^0(C/F^p)$ to $H^0(C/\Gamma^p)$ surjective. Compose with step 6.1. Thus $H^0(C(Q))$ to $H^0(C(Q)/\Gamma^p)$ is surjective for every compatible Gamma and p. This adjusted difference filtration, rather than an unsupported assertion that every unadjusted Gamma piece is a current submodule, is essential. [F3, step 6.1, construct, algebra]

8.1 Combine step 7.1 with positive vanishing from step 4.1 in the long exact sequence of 0 to $\Gamma^p C(Q)$ to C(Q) to $C(Q)/\Gamma^p$ to 0. It gives $H^1(\Gamma^p C(Q))=0$ for every Q and p, and also all higher positive degrees. Now return to the finite-top cover P(E) to the given finitely generated M, and put $\Gamma^p N=N$ intersect $F^p P(E)$ on its kernel. The short exact sequence of filtered complexes gives $H^0(F^p C(P(E)))$ to $H^0(F^p C(M))$ surjective, because $H^1(\Gamma^p C(N))=0$. The source vanishes in each improved weight for p sufficiently large by step 3.1. Therefore $H^0(F^p C(M))_d=0$ for p sufficiently large. Together with $H^1(F^p C(M))=0$, this proves the exact tail assertions in the Statement. In particular $H^0(C(M))_d$ to $H^0(C(M)/F^p)_d$ is an isomorphism for p large, with its induced filtration. The finite-truncation comparison from step 5.1 then proves the claimed actual Li edge isomorphism. Negative-degree quantum cohomology was not required or inferred. [step 7.1, construct, algebra]

9.1 For the universal vacuum algebra, write $\Gamma_H$ for its induced Li filtration on $W^k$. Step 8.1 gives $\operatorname{gr}_{\Gamma_H} W^k=O(S_{\infty})$. Intrinsic Li is the finest compatible filtration, so $F^p W^k$ subset $\Gamma_H^p W^k$ and the identity induces a differential vertex-Poisson map $\operatorname{gr}_F W^k$ to $\operatorname{gr}_{\Gamma_H} W^k$. Its degree-zero map $W/F^1$ to $W/\Gamma_H^1=O(S)$ is surjective. The target arc algebra is differentially generated by O(S), hence the entire map is surjective. Step 3.1 for the vacuum gives finite-dimensional nonnegative improved-weight spaces, with $W_0=C$; intrinsic Li is separated and finite in each such weight because a monomial of derivative count p has weight at least p. The induced filtration is also finite by step 8.1. Thus in each improved weight the source and target associated gradeds have the same finite total dimension, namely $\operatorname{dim} W_d$. The map is an isomorphism; finite descending-filtration lifting gives equality of the two actual filtrations. This establishes universal intrinsic Li rather than borrowing the public Kazhdan assertion of F1. [F1, F3, step 8.1, construct, algebra]

10.1 Finally let V be the affine vertex quotient in the Statement. Right exactness in step 4.1 gives the actual surjection $W^k$ to $H^0(C(V))$. The affine quotient is strict for Li spanning monomials, and F3 makes its classical reductions surjective. Step 8.1 identifies the associated graded map with this classical surjection. Finite lifting in each target improved weight therefore makes the W map strict for its source intrinsic Li and its target induced Li: lift the leading symbol and subtract, repeating until the target's zero tail is reached. Under a surjective vertex homomorphism, intrinsic Li on the target is exactly the image of intrinsic Li on the source, since every state in a target Li monomial can be lifted. Thus the target induced filtration is its intrinsic one. Its Li degree-zero classical reduction has no derivative variables and positive current modes annihilate it; it is precisely $(R_V\text{ divided by the finite moment constraints})^n$. The finite gauge-torsor scheme calculation in F3 identifies this with the coordinate algebra of $X_V$ intersect S, with scheme structure from $R_V$. All assertions follow, including when this algebra is zero. [F1, F3, step 9.1, construct, algebra] ∎

## Remaining consumer obligations

Nonzero reduction requires principal f to belong to the actual affine
associated variety; containment of that variety in the nilcone alone is
insufficient. The W owner supplies that additional input. This lemma also
does not identify all W simple tops or prove W rationality. The classical
module exactness and finite-top contraction are logical suppliers of the
quantum argument, and must be retained with their actual mode and filtration
conventions at any future adoption.
