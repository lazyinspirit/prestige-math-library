---
page: kashiwara-operators-and-crystal-lattices
title: "Kashiwara Operators and Crystal Lattices"
status: draft
requires: [divided-powers-integral-forms-and-quantum-highest-weights]
items: [def-the-local-ring-at-q-zero,
        thm-unique-kashiwara-i-string-decomposition,
        def-kashiwara-crystal-operators,
        thm-the-i-string-decomposition-of-the-negative-half,
        def-crystal-lattice-and-crystal-basis,
        lem-rank-one-tensor-strings-have-the-crystal-limit-rule,
        def-crystal-graph-epsilon-phi-and-weight,
        def-kashiwara-lattices-lambda-and-infinity,
        lem-highest-weight-tensor-maps-and-their-adjunction,
        thm-grand-loop-existence-of-highest-weight-crystal-bases,
        lem-crystal-lattice-polarizations-are-perfect-at-q-zero,
        lem-crystal-operators-commute-with-highest-weight-projection-modulo-q,
        thm-crystal-basis-of-the-negative-half]
examples: []
---

**Objective.** This page develops the crystal theory of the negative half
$U_q^-$ and of integrable highest weight modules over the local ring
$A_0=\mathbb Q[q]_{(q)}$: the Kashiwara operators extracted from the unique
$i$-string decomposition, the axiom scheme of crystal lattices and crystal
bases, the rank-one tensor calculation that fixes the crystal limit rule, and
the grand-loop existence theorem producing the crystals
$(\mathcal L(\lambda),\mathcal B(\lambda))$ and
$(\mathcal L(\infty),\mathcal B(\infty))$. The page states the inherited
dependency of the choice principle exactly: the axiom of choice enters only
through the negative-half bilinear form of the prerequisite page, at the
dual-lattice transfer step of the grand loop; the string decompositions, the
rank-one tensor strings and the finite lattice computations are choice-free.

## The limiting ring and string decompositions

The coefficient ring is fixed in [[def-the-local-ring-at-q-zero]]: the
localisation $A_0=\mathbb Q[q]_{(q)}$ is the discrete valuation ring of the
normalised $q$-adic valuation, a principal ideal domain with maximal ideal
$qA_0$, residue field $\mathbb Q$ and fraction field $\mathbb Q(q)$, and
passing from a free $A_0$-module $L$ to its **crystal limit** $L/qL\cong
\mathbb Q\otimes_{A_0}L$ is the operator in which all crystal statements are
phrased.

The finite computations begin with
[[thm-unique-kashiwara-i-string-decomposition]]: in a chosen $P$-graded
type-one integrable module, every vector has a unique admissible sum
$u=\sum_{n\ge0}F_i^{(n)}u_n$ with $u_n\in H_{\lambda+n\alpha_i}=\ker E_i$ and
the coefficient at each string's bottom forced to zero.
[[def-kashiwara-crystal-operators]] turns this decomposition into the
Kashiwara operators $\tilde e_i,\tilde f_i$, which move one position along
each string and kill its endpoints, and proves
$\tilde f_i\tilde e_i=\mathrm{id}-p_{\mathrm{top}}$,
$\tilde e_i\tilde f_i=\mathrm{id}-p_{\mathrm{bottom}}$,
$\ker\tilde e_i=\ker E_i$ and $\ker\tilde f_i=\ker F_i$, together with
naturality in weight-graded morphisms and the interior comparison with
$F_i$. On the negative half,
[[thm-the-i-string-decomposition-of-the-negative-half]] obtains the
$q$-boson projection $P_i=\sum_m(-1)^mq_i^{-m(m-1)/2}F_i^{(m)}e_i'^{\,m}$, the
unique finite expansion $u=\sum_nf_i^{(n)}u_n$ with $u_n\in\operatorname{Ker}
e_i'$, the Kashiwara operators on $U_q^-$, and the identities
$\tilde e_i\tilde f_i=\mathrm{id}$ and $\ker\tilde e_i=\operatorname{Ker}e_i'$
that make every lowering string infinite.

## Crystal lattices, the rank-one rule and the crystal graph

[[def-crystal-lattice-and-crystal-basis]] fixes the vocabulary: a crystal
lattice is a free $A_0$-submodule generating the module, stable under both
operators and split into free graded pieces; a crystal basis adds a residue
basis $B$ of the crystal limit, graded, operator-stable and satisfying the
partial-inverse axiom $\tilde f_ib=b'\iff b=\tilde e_ib'$. The definition
records the induced operators on the limit, the rank identities
$\dim_{\mathbb Q(q)}M_\mu=\operatorname{rank}_{A_0}L_\mu=\#B_\mu$, and the
negative-half refinement in which $\tilde f_iB\subseteq B$ without exceptions.

The crystal limit rule in rank one is computed, not assumed:
[[lem-rank-one-tensor-strings-have-the-crystal-limit-rule]] treats the tensor
product of two simple rank-one divided strings for $E_i,F_i,K_i^{\pm1}$, shows
that the tensor lattice is a crystal lattice, computes the residues of the
divided strings by an explicit recurrence together with the norm criterion
$L=\{x:B(x,x)\in A_0\}$, and obtains the two-case rule in which the strict
comparison $\varphi_i(\text{first})>\varepsilon_i(\text{second})$ belongs to
$\tilde f_i$ and the non-strict one to $\tilde e_i$, with the partial-inverse
property on the resulting chains. The chains partition the divided rectangle.
[[def-crystal-graph-epsilon-phi-and-weight]] then reads the invariants off the
graph: $\varepsilon_i$ and $\varphi_i$ are finite on module crystals, satisfy
$\varphi_i(b)=\varepsilon_i(b)+\langle h_i,\mathrm{wt}(b)\rangle$, increase and
decrease along an arrow, and the $i$-chains are finite strings; on the negative
half one keeps finite $\varepsilon_i$, the formal $\varphi_i$ that may be
negative, and the actual lowering length $\ell_i^-=\infty$.

## The grand loop and its consequences

The objects of the theory are constructed in
[[def-kashiwara-lattices-lambda-and-infinity]]: $\mathcal L(\lambda)$ and
$\mathcal L(\infty)$ generated over $A_0$ by the lowering words, with the
graded decompositions, the recursive spanning
$\mathcal L(\lambda)_{\lambda-\alpha}=\sum_i\tilde f_i\mathcal
L(\lambda)_{\lambda-\alpha+\alpha_i}$, the finiteness and freeness of the
graded pieces, and the surjectivity of $\pi_\lambda:U_q^-\to V(\lambda)$.
That definition deliberately claims no crystal basis. The module-level tensor
maps that the construction consumes are
[[lem-highest-weight-tensor-maps-and-their-adjunction]]: the cyclic highest
summand $U_q(\mathfrak g)(v_\lambda\otimes v_\mu)\cong V(\lambda+\mu)$, the
maps $\Phi_{\lambda,\mu}$ and $\Psi_{\lambda,\mu}$ with
$\Psi_{\lambda,\mu}\Phi_{\lambda,\mu}=\mathrm{id}$ and the direct splitting,
the contravariant product form with its adjunction and isometry, and the unique
$U_q^-$-linear retraction $S_{\lambda,\mu}$.

[[thm-grand-loop-existence-of-highest-weight-crystal-bases]] proves the
interlocking clauses A(r)-O(r) by one induction on the height, in the order of
the source's grand loop: string components, rank-one tensors, the large-weight
microlocal congruences, the color-change splitting and tensor-lattice
decomposition, the projections and pairing steps, and finally independence and
spanning of the lowering-word residues. Its conclusion is that
$(\mathcal L(\lambda),\mathcal B(\lambda))$ and
$(\mathcal L(\infty),\mathcal B(\infty))$ are crystal bases over $A_0$, with
free graded pieces and the rank equality
$\dim_{\mathbb Q(q)}V(\lambda)_\mu=\#\mathcal B(\lambda)_\mu$. The theorem
declares the axiom of choice exactly once, for the simultaneous choice of dual
bases at the field-dual transfer step; every other step is finite string and
lattice algebra.

Three consequences are recorded on the page.
[[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]]
packages the projection clauses L, M, N and O of the grand loop: the lattice
projection $\pi_\lambda(\mathcal L(\infty)_{-\alpha})=\mathcal
L(\lambda)_{\lambda-\alpha}$, the operator compatibilities modulo $q$, and the
bijection from the surviving negative-half residues onto
$\mathcal B(\lambda)_{\lambda-\alpha}$; only the bijection inherits the choice
principle, through the negative-half form comparison.
[[lem-crystal-lattice-polarizations-are-perfect-at-q-zero]] shows that the
normalized polarizations take values in $A_0$, that the residue bases are
orthonormal, that every finite Gram determinant is a unit of $A_0$ so the
pairing is perfect with $\mathcal L^\vee=\mathcal L$, and that
$\mathcal L=\{x:\langle x,x\rangle\in A_0\}$ inside the scalar extension.
[[thm-crystal-basis-of-the-negative-half]] assembles the negative-half
statements: $(\mathcal L(\infty),\mathcal B(\infty))$ is a crystal basis of
$U_q^-$, its root-graded components are free of rank
$\#\mathcal B(\infty)_{-\nu}=\dim_{\mathbb Q(q)}U_q^-[-\nu]$, the projections
onto the highest weight crystals are compatible, and the crystal is the
infinite lowering crystal of $\mathbf 1$ with formal $\varphi_i$ and
$\ell_i^-=\infty$.

The companion [[kashiwara-operators-and-crystal-lattices-examples]] works the
smallest instances explicitly: the strings and invariants in the
three-dimensional $\mathfrak{sl}_2$-module, the full crystal graph of
$B(2\lambda_1)$ for $\mathfrak{sl}_3$, a free generating lattice that is not a
crystal lattice, and the projection from $B(\infty)$ onto a highest weight
crystal.
