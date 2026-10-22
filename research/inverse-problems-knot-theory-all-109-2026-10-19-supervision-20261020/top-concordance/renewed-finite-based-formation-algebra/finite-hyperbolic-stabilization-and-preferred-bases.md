# Finite hyperbolic stabilization and preferred formation bases

NEW draft, 2026-10-21. Author: /root/top_free_abelian_torsion.
This is a finite algebraic supplier for physical handle constructions, not
an assertion that a general cobordism kernel is free or a proof of the
geometric realization of an algebraic stabilization.

## Exact contract

Work under CC over R=Z[Z^d], any fixed finite d, with involution g↦g^(-1).
Use right modules and sesquilinear lambda, conjugate-linear in the first
variable. Let epsilon=+1 or -1. A quadratic form here has the actual
identities

    lambda(y,x)=epsilon*overline(lambda(x,y)),
    lambda(x,x)=a+epsilon*bar(a) if mu(x)=[a],
    mu(x+y)=mu(x)+mu(y)+[lambda(x,y)],
    mu(xb)=bar(b)*mu(x)*b,

with mu valued in Q_epsilon=R/{a-epsilon*bar(a)} as an additive quotient.
These are the normally FRAMED identities: no normal Euler correction is
being suppressed. A simple adjoint means an actual isomorphism preserving
the supplied stable basis classes. A stable basis of P includes a finite
isomorphism P⊕R^a≅R^b and its basis class; a bare projective module is not
such input.

Suppose (G,lambda,mu) has supplied finite stable basis data, and a submodule
L has supplied finite stable basis data and an actual split exact sequence

    0 -> L -> G -> L^* -> 0,                       (1)

whose quotient map is induced by lambda. Require lambda(L,L)=0, mu(L)=0,
and require (1) to be BASED with the dual stable marking on L^*. In
particular its adjoint identification is an actual simple isomorphism,
not just an equality of ranks. Then a finite explicitly permitted
algebraic stabilization

    (G,L) -> (G⊕H(R^a), L⊕R^a)

has an actual preferred hyperbolic basis (e_1,...,e_r,f_1,...,f_r), with the
e_i any chosen actual basis representing the stabilized preferred class
of L. Here H(R^a) has its displayed standard basis, and R^a denotes its
first standard lagrangian. All entries of the basis change are finite
ring elements, and the final correction is a finite product of elementary
matrices. Nothing asserts that the original unstabilized L is free.

For a formation with TWO such based-stablyfree lagrangians L_1,L_2 in the
same form, a common finite hyperbolic stabilization makes both free and
based. Any simple isomorphism between these stabilized lagrangians extends
to an actual simple isometry of the stabilized quadratic form. In
particular choosing their preferred bases gives an actual finite matrix
sending one lagrangian to the other. The lagrangians need not be
complementary, and this does not assert triviality of the formation or
vanishing of its odd surgery obstruction.

## Source and interface boundary

New primary reading for this unit: Wall, Surgery on Compact Manifolds,
second edition, printed48–50/PDF60–62, full Lemma5.3, Corollary5.3.1 and
the stabilization argument; printed58–60/PDF70–72, the finite formation
construction through the upper triangular stabilizer formulas; printed
69–70/PDF81–82, the formations note. The cached full source is
../renewed-relative-tangent-germ/sources/low-connectivity-primary/
wall-surgery-compact-second-edition.pdf and .txt. The framed quadratic
identities and Euler caveat were also read in printed45–48/PDF57–60.
The displayed basis correction below is checked directly rather than
relying on a transcription of the printed cross-pairing line.

Only the adopted finite based kernel-duality CONTRACT can supply (1) in
its exact normal-map situation: its modules L=K8(N,M), K=K7(M), H=K7(N)
are stably based with 0→L→K→H→0 and simple L≅H^*. Dualizing gives the
required simple K/L≅L^*. Its nullbordism construction supplies mu(L)=0.
This paragraph consumes that exact contract, not its accepted proof.
There is no inferred contract for H7(W,M0) of an arbitrary W with both
end inclusions six-connected.

## 1. Making a based lagrangian free by the permitted stabilization

Choose the finite witness L⊕R^a≅R^r representing its supplied stable basis;
increase a if necessary to reach an actual representative of that class.
Adjoin the standard hyperbolic form H(R^a), and set L'=L⊕R^a inside G'.
The exact sequence for G' is the direct sum of (1) with the standard based
sequence for H(R^a), so remains based with quotient (L')^*. Its kernel
L' is free with the specified preferred basis e_i. Lift the dual basis
of (L')^* through the quotient map to elements f_i in G'. A splitting
exists since that quotient is free; choosing the finitely many lifts is
finite choice. Then e_i,f_i form an ACTUAL basis of G', since the sequence
is split. By its basedness this actual basis represents the supplied
preferred stable class of G'. We have

    lambda(e_i,e_j)=0, mu(e_i)=0,
    lambda(e_i,f_j)=delta_ij.

This is also an explicit free presentation of G'; no cancellation theorem
for arbitrary projective modules is being used.

## 2. Finite triangular correction to a hyperbolic basis

Write A_ij=lambda(f_i,f_j), and choose representatives a_i in R of
mu(f_i). The quadratic identity gives A_ii=a_i+epsilon*bar(a_i).
Set C_ij=-epsilon*A_ij for i<j, C_ii=-epsilon*a_i, and C_ij=0 for i>j.
Replace

    f'_j=f_j+sum_i e_i*C_ij.

The e_i are unchanged. Direct sesquilinearity gives

    lambda(f'_i,f'_j)=A_ij+epsilon*C_ij+bar(C_ji)=0.

For i<j this follows from the choice of C_ij; for i>j use hermitian
symmetry; for i=j it is exactly the displayed diagonal identity. Also
lambda(e_i,f'_j)=delta_ij. Quadratic additivity and isotropy of all e_i
give

    mu(f'_j)=mu(f_j)+[epsilon*C_jj]=[a_j]-[a_j]=0.

The terms with i≠j contribute zero since lambda(f_j,e_i)=0. Thus e_i,f'_i
are a hyperbolic basis. The basis transformation has block form
[[I,C],[0,I]]. It is the product of the finitely many elementary matrices
E_(i,r+j)(C_ij); these commute since all have source in the first block
and target in the second. Its inverse has -C, so it preserves the
preferred stable basis class without any appeal to Gaussian elimination
or to vanishing of Wh(R). This proves the single-lagrangian contract.

## 3. Two lagrangians and the actual formation matrix

For L_1,L_2 choose finite stabilization witnesses a_1,a_2. Take a common
a at least both, increasing further if either supplied stable basis needs
more coordinates to have its actual representative. Adding the SAME
H(R^a) to the form puts L_i'=L_i⊕R^a inside the SAME G'. The preceding
construction gives two preferred hyperbolic bases (e_i^(1),f_i^(1)) and
(e_i^(2),f_i^(2)). Their sizes agree: each is half the rank of G', as
seen by augmentation to Z and then Q. No projective rank assertion is
needed before the modules have become free.

The map sending the first displayed hyperbolic basis to the second is
an actual invertible finite matrix, preserves lambda and mu by the
quadratic identities, and is simple since both bases are preferred.
It sends L_1' to L_2'. More generally, for a simple isomorphism T:L_1'→L_2',
map their dual complementary summands by (T^*)^(-1). On hyperbolic
coordinates the result is diag(T,(T^*)^(-1)); its lambda/mu identities are
immediate by substitution. The stable class of its matrix is zero because
T and its dual inverse are simple. Composing with the two hyperbolic
coordinate identifications proves the extension clause with a specified
lagrangian map.

## 4. What physical realization must still provide

Every stabilization here adjoins a DISPLAYED standard hyperbolic form
and its first lagrangian with its standard marking. A physical consumer
must earn that exact module/form/basis change from its actual handle or
normal trace construction. An arbitrary cancelling pair, arbitrary
interior connected sum, or an unmarked abstract stable isomorphism is not
silently identified with this operation. Likewise a preferred algebraic
basis does not supply embedded sphere representatives, an exact relative
homotopy class, or prescribed outgoing-end control.

In particular six-connectivity of the two ends of a dimension15 bordism
can leave a two-term middle chain complex with nonprojective middle
homology. Even when a finite chain complex has free terms, its homology
is not automatically projective or stably free. To use this unit the
consumer must supply either the adopted normal-map duality contract above
or an actual split finite chain argument giving the stated stable bases
and based adjoint sequence. The first missing input in the bare
six-connected-bordism formulation is precisely that split/duality data,
not a further computation of K0(R) or Wh(Z^d).

All operations used in this finite unit are finite lifts, finite choices
of representatives of quotient classes, finite sums and matrix products.
No full Choice or dependent infinite selection is introduced. Physical
trace realization is outside this proof.
