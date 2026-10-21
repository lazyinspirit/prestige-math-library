---
id: thm-upsilon-additivity-mirror-and-genus-bound
kind: theorem
title: "Upsilon additivity, mirror symmetry, and four-ball genus bound"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-knot-floer-filtration-and-tau
  - thm-tau-is-concordance-invariant-and-four-ball-genus-bound
  - lem-tau-connected-sum-filtered-tensor-product
  - lem-upsilon-nu-minus-four-ball-bound
  - def-epsilon-from-filtered-knot-floer-complex
  - def-upsilon-function-from-filtered-complex
  - lem-upsilon-filtered-tower-splitting
  - def-countable-choice
  - def-axiom-of-choice
  - def-knot-connected-sum-and-prime-knot
  - def-reverse-mirror-of-oriented-knot
  - lem-knot-floer-duality-and-filtration-swap
  - def-smooth-and-topological-slice-genus
  - lem-tau-is-independent-of-heegaard-grid
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite cycle-minimax argument uses no choice. The cobordism-map route in the four-ball bound uses the ACω analytic branch. The full-AC plan edge is retained separately and is not treated as implied by ACω."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §§2–5"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Propositions 1.2, 1.4–1.6, 1.8–1.9 and Theorem 1.11; proofs in §§4–5"
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon, §§4–9"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: "Weighted filtrations, finite minimax, connected sums, duality, and smooth four-ball genus bound"
---

## Statement

For every smooth oriented knot $K\subset S^3$, the function $\Upsilon_K:[0,2]\to\mathbb R$ defined by the finite cycle minimax is continuous and piecewise linear with finitely many breakpoints, satisfies $\Upsilon_K(0)=0$ and $\Upsilon_K(t)=\Upsilon_K(2-t)$, and has right derivative $\Upsilon'_K(0+)=-\tau(K)$. For smooth oriented knots $K,J$ and $t\in[0,2]$,
$$ \Upsilon_{K\#J}(t)=\Upsilon_K(t)+\Upsilon_J(t),\qquad \Upsilon_{-K}(t)=-\Upsilon_K(t), $$
where $-K$ is the reverse mirror, the inverse under connected sum in the smooth concordance group. If $g_4^{\mathrm{sm}}(K)$ is the minimum genus of a smooth properly embedded compact connected oriented surface in the four-ball with boundary $K$, then
$$ |\Upsilon_K(t)|\le t\,g_4^{\mathrm{sm}}(K)\qquad(0\le t\le1). $$

## Statement references

[[def-upsilon-function-from-filtered-complex|Finite cycle-minimax definition and filtration convention]]

[[lem-tau-connected-sum-filtered-tensor-product|The supplied normalized bifiltered connected-sum tensor comparison]]

[[lem-upsilon-nu-minus-four-ball-bound|The auxiliary nu-minus genus estimate required for the Upsilon bound]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §§2–5](https://arxiv.org/pdf/1407.1795)

[Livingston, *Notes on the knot concordance invariant Upsilon*, §§4–9](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

## Facts & Assumptions

**Given:** A smooth oriented knot Floer complex with its finite bifiltered basis, normalized Maslov-zero total-homology generator, and the $F_t$ cycle-minimax convention.

[F1] [[def-upsilon-function-from-filtered-complex]]: $\nu_t$ is the minimum of $F_t(z)$ over Maslov-zero cycles representing the normalized generator, and $\Upsilon_K(t)=-2\nu_t$; its finite candidate set makes the function piecewise linear.

[F5] The full geometric connected-sum comparison supplies the actual Maslov-graded bifiltered Laurent tensor equivalence, inverse and homotopies. [[lem-tau-connected-sum-filtered-tensor-product]]

[F9] The auxiliary threshold exists and is nonnegative by its local $V_s,H_s$ exponent proof. Its smooth genus upper bound uses the explicitly external OSS/Hom–Wu theorem in the exact same delta-threshold convention, with fixed finite/countable choice scope. [[lem-upsilon-nu-minus-four-ball-bound]]

[A3] [[def-smooth-and-topological-slice-genus]]: the intended bound is the smooth four-ball genus branch; no locally flat/topological surface branch is used.

[F6] The supplied normalized doubly pointed polynomial complex $B=C\{i\le0\}$ has quotient $B/UB$ equal to the ordinary normalized hat model, whose total homology is $\mathbb F_2$ in degree zero. The differential retains every positive $z$ multiplicity as filtration. These are the accepted marked-variable/analytic knot interfaces, not arbitrary-link or cobordism assertions. [[def-knot-floer-filtration-and-tau]], [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]], [[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing]]

[F2] [[lem-knot-floer-duality-and-filtration-swap]]: mirror duality negates both filtration coordinates, and conjugation exchanges the algebraic and Alexander filtrations. Its actual generator/class maps and absolute Seifert/Maslov origins are supplied without grid comparison.

[F3] [[def-reverse-mirror-of-oriented-knot]]: the reverse mirror is the reflected knot with its knot orientation reversed, using the fixed orientation-reversing reflection from the connected-sum convention.

[F7] The actual normalized model comparison supplies knot-level invariance of the two filtrations and hat threshold. The small-$t$ calculation below uses that threshold directly and does not use the still-held four-ball genus theorem. [[lem-tau-is-independent-of-heegaard-grid]]

[F8] The full normalized grid/analytic filtered equivalence is supplied, with the actual ordinary marked factors and absolute grading origins. [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]]

[F4] [[lem-upsilon-filtered-tower-splitting]] proves a filtered projection onto a minimizing rank-one tower and the exact real-series regrading comparison with maximal non-torsion degree $-2\nu_t$, for a supplied normalized complex.

## Proof

1.1 By [F1], each fixed Maslov-zero cycle has filtration equal to the maximum of finitely many affine functions of $t$, and there are finitely many such cycles. Thus $\Upsilon_K$ is piecewise linear with finitely many breakpoints. The supplied model comparison [F8] makes this calculation a knot invariant. At $t=0$, $F_0$ is the algebraic filtration; the normalization in [F1] says the tower generator first appears at level zero, so $\nu_0=0$ and $\Upsilon_K(0)=0$. Exchanging the two bifiltration coordinates sends $F_t$ to $F_{2-t}$; [F2] therefore gives $\Upsilon_K(t)=\Upsilon_K(2-t)$. [given, F1, F8, F2, algebra]

1.2 Under the supplied geometric tensor comparison [F5], the connected-sum complex is the convolution-filtered Laurent tensor product. For a fixed $t$, apply the proved filtered splitting [F4] separately to the two factors. Their rank-one summands tensor to a zero-differential tower whose normalized generator has filtration $\nu_t(K)+\nu_t(J)$. Every other tensor summand contains an acyclic Laurent factor and is acyclic. To justify that last assertion without a filtered contraction assumption, normalize the factor's basis to Maslov degrees zero and one: its differential is given by finite binary matrices from degree one to zero and from degree zero to $U$ times degree one. Acyclicity makes the resulting finite parity complex acyclic, so finite vector-space complements give a contracting homotopy; the Laurent degree shifts insert only powers of $U$ or $U^{-1}$ to make it a chain homotopy. Tensoring this contraction with any other complex is a contraction, since the two cross terms cancel over $\mathbb F_2$. Thus only the displayed tower carries total homology. The splitting is filtered, so no representative of its nonzero class can have a smaller filtration than that tower generator. This proves $\nu_t(K\#J)=\nu_t(K)+\nu_t(J)$ and Upsilon additivity. [given, F1, F5, F4, algebra]

2.1 By the actual normalized geometric duality [F2], the reverse-mirror complex is the filtered dual. Dualize the fixed-$t$ filtered splitting in [F4]. A filtration-preserving change of basis with filtration-preserving inverse has the same property after dualizing and negating the basis filtrations. The dual of the minimizing tower has normalized generator at filtration $-\nu_t(K)$. The dual complementary factor is acyclic, because the unfiltered finite Laurent contraction in step 1.2 dualizes to a contraction. Therefore the dual minimax equals $-\nu_t(K)$, and $\Upsilon_{-K}(t)=-\Upsilon_K(t)$. This uses no unproved identification of the homology of a dual torsion module. [given, F1, F2, F4, step 1.2, algebra]

3.1 First derive the actual minus normalization from [F6]. Since $B$ is finite free over $\mathbb F_2[U]$ with homogeneous generators, its chain groups vanish above a fixed Maslov degree. The exact sequence $0\to UB\to B\to B/UB\to0$ and $H(B/UB)=\mathbb F_2$ in degree zero imply that multiplication by $U$ is an isomorphism between adjacent even-degree homology groups below zero and between adjacent odd-degree groups; boundedness above gives $H_{>0}(B)=0$, $H_0(B)=\mathbb F_2$, and all odd groups zero. Thus $H(B)=\mathbb F_2[U]$ generated in degree zero. Every normalized minus cycle projects to the hat generator. Conversely, lift a Maslov-zero hat generator cycle to $c\in B$. Write $\partial c=Ud$; then $\partial d=0$ and $M(d)=1$. Since $H_1(B)=0$, write $d=\partial e$. The polynomial cycle $c+Ue$ lifts the SAME hat cycle and has the same leading $i=0$ terms. Therefore the least Alexander level among the $i=0$ parts of normalized minus cycles is exactly $\tau(K)$. Every normalized minus representative has a nonzero $i=0$ part, since a representative wholly in $UB$ would make the top homology generator $U$-divisible. The finite Maslov-zero Laurent cycle set admits a common positive $t$ interval in which any term with $i\ge1$ excludes a cycle from minimizing, and the maximum on a cycle with $i\le0$ comes only from its $i=0$ terms. Hence $\nu_t(K)=t\tau(K)/2$ on that interval and $\Upsilon'_K(0+)=-\tau(K)$. No genus estimate is used. [given, F1, F6, F7, F8, algebra]

3.2 Let $s=\nu^-(K)$ as defined in [F9], and put $g=g_4^{\mathrm{sm}}(K)$. Since $\delta(\mathcal A(K,s))=0$, there is a non-torsion homology class of Maslov grading zero represented by a cycle $z$ in $\mathcal A(K,s)$. For every finite basis generator $x_r$, all sufficiently large powers $U^n x_r$ satisfy $A(x_r)-n\le s$; hence localizing the inclusion $\mathcal A(K,s)\hookrightarrow C^-(K)$ gives the full $\mathrm{CFK}^{\infty}(K)$ complex and induces an isomorphism on localized homology. The non-torsion class $[z]$ therefore maps to a nonzero degree-zero element of $H_*(C^-(K))\otimes_{\mathbb F_2[U]}\mathbb F_2[U,U^{-1}]=\mathbb F_2[U,U^{-1}]$, whose only nonzero degree-zero element is the normalized generator. Thus $z$ represents that generator in $C^-(K)$ and in $C(K)$. Each term of $z$ has $i\le0$ and $j\le s$, so $F_t(z)=(1-t/2)i+(t/2)j\le ts/2$ for $0\le t\le1$. Therefore $\nu_t(K)\le ts/2\le tg/2$ by [F9], and $\Upsilon_K(t)\ge-tg$. A linear reflection extending the fixed reflection of $S^3$ to $B^4$ sends any smooth genus-$g$ surface bounded by $K$ to a genus-$g$ surface bounded by its mirror; reversing the surface orientation changes that boundary to the reverse mirror. Applying this diffeomorphism in both directions gives $g_4^{\mathrm{sm}}(-K)=g$. Apply the same threshold argument to $-K$ and use step 2.1 to obtain $\Upsilon_K(t)\le tg$. Combining both inequalities proves the bound, using the externally supplied genus upper estimate in [F9]. [given, F9, A3, F3, step 2.1, algebra]

## External-input boundary

Every original clause follows from the displayed local minimax, derivative, tensor and dual arguments and the accepted normalized interfaces. The genus clause uses the explicitly external OSS/Hom–Wu smooth bound in [F9]; it is not inferred from a tau estimate or presented as a completed local surface-map construction. Its fixed finite/countable choice specialization is stated in that supplier.
