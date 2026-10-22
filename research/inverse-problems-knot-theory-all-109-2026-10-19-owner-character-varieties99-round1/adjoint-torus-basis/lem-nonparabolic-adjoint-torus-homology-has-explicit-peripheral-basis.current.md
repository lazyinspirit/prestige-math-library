---
id: lem-nonparabolic-adjoint-torus-homology-has-explicit-peripheral-basis
kind: lemma
title: "An explicit peripheral basis for nonparabolic adjoint torus homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-cellular-chains-compute-homology-with-local-coefficients
justified_by: []
proof_strategy: direct
axiom_use: "The calculation uses only finite-dimensional linear algebra and at most one explicit quadratic field extension for checking identities. No choice principle is assumed."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Bénard, Florens and Rodau, A slope invariant and the A-polynomial of knots"
      url: https://arxiv.org/pdf/2102.24151
      locator: "Section2.2 and Section3.3, PDF/printed pp6–10; invariant peripheral vectors and peripheral twisted homology. The unnormalized vector and explicit contraction are proved here."
---

## Statement

Let $F$ be a field of characteristic different from $2$, and let $L,M\in SL_2(F)$ commute. Write $t=\operatorname{tr}M$ and suppose $\Delta=t^2-4\ne0$. Give the torus $T^2$ an ordered pair of based oriented generating loops $(\lambda,\mu)$, and give its adjoint local system intrinsic monodromies $P=\operatorname{Ad}L$ and $Q=\operatorname{Ad}M$ on $V=\mathfrak{sl}_2(F)$. Here monodromy acts on column coefficient vectors on the left. Set
$$v=M-\frac t2 I,\qquad W=\{X\in V:\operatorname{tr}(vX)=0\}.$$
Then $V=Fv\oplus W$, both summands are preserved by $P,Q$, and $P,Q$ are the identity on $Fv$. There is an explicit split chain model
$$0\longrightarrow V\xrightarrow{d_2}V\oplus V\xrightarrow{d_1}V\longrightarrow0,$$
where $d_2z=((I-Q)z,(P-I)z)$ and $d_1(x,y)=(P-I)x+(Q-I)y$, in the ordered edge coordinates $(\lambda,\mu)$. Its $W$ subcomplex is contractible, so
$$H_0(T^2;V)=F[v],\qquad H_1(T^2;V)=F[v\otimes\lambda]\oplus F[v\otimes\mu],\qquad H_2(T^2;V)=F[v\otimes[T^2]].$$
In particular the two displayed peripheral classes are an actual basis, without imposing any norm-one normalization on $v$. The splitting, contraction and classes commute with field extensions and simultaneous conjugation of $L,M$. All their matrix entries are rational expressions in the entries of $L,M$, with denominators powers of $2$ and $\Delta$. This assertion concerns boundary-torus homology only: it makes no claim about the rank of its inclusion into the homology of a knot exterior.

## Facts & Assumptions

**Given:** The field, commuting matrices, nonzero discriminant, ordered torus generators and specified left intrinsic monodromies in the Statement.

[F1] Cellular chains with local coefficients compute intrinsic singular local homology; for supplied lifts their boundary is the signed attaching-incidence matrix acting by the specified monodromies ([[thm-cellular-chains-compute-homology-with-local-coefficients]]). We use its left coefficient convention and do not regard a left action as a right action without inversion.

## Proof

1.1 **The fixed line and a rational complementary plane.** The direct $2\times2$ determinant identity gives $M^2-tM+I=0$, and therefore $v^2=(\Delta/4)I$, $\operatorname{tr}v=0$, and $\operatorname{tr}(v^2)=\Delta/2\ne0$. In particular $v\ne0$. The map $\pi:V\to Fv$ defined by $\pi(X)=2\operatorname{tr}(vX)v/\Delta$ is a projection: $\pi(v)=v$, its image is $Fv$ and its kernel is $W$. Thus $V=Fv\oplus W$. Commutation of $L,M$ implies $P(v)=Q(v)=v$. For either $A=L$ or $A=M$, the direct identity $\operatorname{tr}(AB)=\operatorname{tr}(BA)$ gives $\operatorname{tr}(vAXA^{-1})=\operatorname{tr}(A^{-1}vAX)=\operatorname{tr}(vX)$. Hence $P,Q$ preserve $W$ and commute with $\pi$. [given, construct, algebra]

2.1 **An actual inverse on the complementary plane.** On $W$ the inverse of $Q-I$ is the explicit operator $R=(Q+(3-t^2)I)/\Delta$. To check this without a splitting-field assumption, the polynomial $z^2-tz+1$ either has a root in $F$ or is irreducible, in which case its quotient gives a quadratic extension. In that field its two distinct roots are $r,r^{-1}$, and a change of basis diagonalizes $M$, since the two kernels of $M-rI$ and $M-r^{-1}I$ are distinct one-dimensional subspaces. In these coordinates $v=\operatorname{diag}((r-r^{-1})/2,-(r-r^{-1})/2)$, $W$ is exactly the off-diagonal plane, and $Q$ has eigenvalues $r^2,r^{-2}$ on it. Consequently $Q^2-(t^2-2)Q+I=0$ on $W$, and multiplication gives $(Q-I)(Q+(3-t^2)I)=\Delta I$ there. This identity descends to $F$, because scalar extension of a finite matrix over a field is injective. The two factors commute, so $R$ is a two-sided inverse. It commutes with $P$ because $P$ commutes with $Q$. This finite calculation uses no chosen eigenvectors in the final formulas. [step 1.1, given, construct, algebra]

2.2 **The actual torus chain complex.** Use one vertex, the two oriented edges and the square whose attaching path is $\lambda\mu\lambda^{-1}\mu^{-1}$. Lift its lower left corner and transport a coefficient from that corner along its four sides. The bottom and oppositely oriented top edges give coefficients $z$ and $-Qz$ in the $\lambda$ coordinate; the right and oppositely oriented left edges give $Pz$ and $-z$ in the $\mu$ coordinate. Thus the square boundary is $((I-Q)z,(P-I)z)$. An edge with monodromy $S$ has boundary $(S-I)$ on its coefficient, which gives $d_1$ as stated. The two composites cancel because $PQ=QP$. This is the supplied-lift cellular model in [F1], so it computes the actual intrinsic homology, rather than an independently assumed complex. The direct-sum decomposition of step1.1 splits this entire complex into its $Fv$ and $W$ parts. [F1, step 1.1, given, construct, algebra]

3.1 **A chain contraction, including both ends of the complex.** On the $W$ part define $h_0:W\to W\oplus W$ by $h_0(z)=(0,Rz)$ and $h_1:W\oplus W\to W$ by $h_1(x,y)=-Rx$, and put all other homotopy maps zero. Then $d_1h_0=I$. Also $h_1d_2=R(Q-I)=I$. Finally $d_2h_1(x,y)=(x,-(P-I)Rx)$ and $h_0d_1(x,y)=(0,R(P-I)x+y)$; their sum is $(x,y)$ because $R$ commutes with $P$. Thus $dh+hd=I$ in each of degrees $0,1,2$. The $W$ summand contributes no homology. On $Fv$ both differentials vanish, leaving one, two and one copies of $Fv$ in those degrees. Their cycles are precisely the vertex, the two supplied oriented edges, and the supplied oriented square with coefficient $v$. This proves the stated basis and not merely a dimension count. [step 1.1, step 2.1, step 2.2, construct, algebra]

4.1 **Compatibility and exact scope.** For a field extension, the same formulas for $v,\pi,R,d,h$ remain defined because $2$ and $\Delta$ remain nonzero; the split contractible and zero-differential summands persist, so their classes identify the actual extended homology. For simultaneous conjugation by an invertible matrix $A$, the map $X\mapsto AXA^{-1}$ sends $v$ to the new $v$, intertwines $P,Q$, and preserves all traces in $\pi$; it therefore carries the splitting and contraction to the displayed new ones and takes each named peripheral cycle to its corresponding cycle. The formulas use only addition, multiplication and division by $2$ and $\Delta$ in the entries of the original matrices (the inverse of an $SL_2$ matrix is its polynomial adjugate). The eigenvalue extension in step2.1 verified an identity, and supplies no extra scalar choice to these formulas. The hypothesis $\Delta\ne0$ excludes the parabolic and scalar cases; neither their homology nor any exterior inclusion rank is asserted. All conclusions, including the fixed order of the two peripheral classes, follow. [step 1.1, step 2.1, step 2.2, step 3.1, given, algebra] ∎
