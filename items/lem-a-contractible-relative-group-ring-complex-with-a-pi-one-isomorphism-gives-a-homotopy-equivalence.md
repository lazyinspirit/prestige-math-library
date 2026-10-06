---
id: lem-a-contractible-relative-group-ring-complex-with-a-pi-one-isomorphism-gives-a-homotopy-equivalence
kind: lemma
title: "A contractible relative group-ring complex with a pi-one isomorphism detects a homotopy equivalence"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: ["def-based-handle-chain-complex-over-the-fundamental-group-ring", "def-homotopy-equivalence", "def-simply-connected", "def-universal-covering-space", "thm-universal-cover-existence", "thm-covering-space-lifting-criterion", "thm-relative-hurewicz-theorem", "thm-whitehead-theorem", "def-relative-singular-homology", "lem-a-handle-decomposition-gives-a-relative-cw-complex", "thm-handle-duality-from-negating-a-morse-function", "thm-seifert-van-kampen", "def-axiom-of-choice", "thm-long-exact-sequence-of-relative-homotopy-groups", "thm-higher-dimensional-spheres-are-simply-connected", "thm-relative-cellular-homology-computes-relative-singular-homology", "thm-homotopy-lifting-for-covering-maps"]
dependency_level: 8
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf"
      locator: "Proposition 8.17(iii), printed pp. 177–178 (PDF 185–186), and Proposition 8.30, printed p. 182 (PDF 190)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 1 §1.2, printed pp. 9--12"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(X,A)$ be a connected finite CW pair with $A$ connected, suppose the inclusion
$A\hookrightarrow X$ induces an isomorphism $\pi_1(A)\to\pi_1(X)$, and suppose
the based relative cellular complex $C_*(\widetilde X,\widetilde A;\mathbb Z)$ with its deck-induced right $\mathbb Z[\pi_1X]$-action is contractible. Then the inclusion
$A\hookrightarrow X$ is a homotopy equivalence. Consequently, for a compact
smooth cobordism $(W;M_0,M_1)$ whose relative handle complex is contractible
and for which $\pi_1(M_0)\to\pi_1(W)$ is an isomorphism, the inclusion
$M_0\hookrightarrow W$ is a homotopy equivalence; and in the realization
construction, where the relative cells occur only in degrees $2$ and $3$ of an
$(n+1)$-dimensional cobordism with $n\ge5$, re-reading the presentation dually
exhibits $M_1\hookrightarrow W$ as a relative homotopy equivalence as well, so
the result is an h-cobordism.

## Facts & Assumptions

**Given:** The Axiom of Choice and a connected finite CW pair $(X,A)$ with $A$ connected, an isomorphism $\pi_1(A)\to\pi_1(X)$ induced by the inclusion, and a contractible based relative cellular complex $C_*(\widetilde X,\widetilde A)$ over $\mathbb Z[\pi_1X]$.

[F1] The based relative cellular complex of a pair is the cellular chain complex of its universal cover with the deck-induced right group-ring structure, its homology is $H_*(\widetilde X,\widetilde A;\mathbb Z)$ because the cellular chains of consecutive skeleta compute relative homology, and a contractible complex has vanishing homology; for a connected $A$ whose inclusion induces an isomorphism on $\pi_1$, the preimage $\widetilde A$ of $A$ in the universal cover $\widetilde X$ is connected and is the universal cover of $A$, hence $\widetilde A$ and $\widetilde X$ are simply connected ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[def-relative-singular-homology]], [[thm-relative-cellular-homology-computes-relative-singular-homology]], [[def-universal-covering-space]], [[def-simply-connected]], [[thm-universal-cover-existence]]).

[F2] Relative Hurewicz theorem under the Axiom of Choice: for $n\ge2$ and an $(n-1)$-connected CW pair $(X,A,x_0)$ with $A$ nonempty, path connected and simply connected, one has $H_i(X,A;\mathbb Z)=0$ for $0\le i<n$ and the relative Hurewicz homomorphism $\pi_n(X,A,x_0)\to H_n(X,A;\mathbb Z)$ is an isomorphism ([[thm-relative-hurewicz-theorem]], [[def-axiom-of-choice]]).

[F3] Whitehead's theorem: every weak homotopy equivalence $f:X\to Y$ between CW complexes is a homotopy equivalence, and for finite CW complexes no choice principle is needed; a covering map is a local homeomorphism and a lift exists exactly when the induced subgroups are contained in one another ([[thm-whitehead-theorem]], [[thm-covering-space-lifting-criterion]], [[def-homotopy-equivalence]], [[thm-homotopy-lifting-for-covering-maps]], [[thm-long-exact-sequence-of-relative-homotopy-groups]], [[thm-higher-dimensional-spheres-are-simply-connected]]).

[F4] The handle complex of a cobordism is the based relative cellular complex of the relative CW pair supplied by its handle decomposition, and the reverse height function of a handle presentation produces the dual decomposition in complementary indices ([[def-based-handle-chain-complex-over-the-fundamental-group-ring]], [[lem-a-handle-decomposition-gives-a-relative-cw-complex]], [[thm-handle-duality-from-negating-a-morse-function]]).

## Proof

1.1 Since the inclusion induces an isomorphism $\pi_1(A)\to\pi_1(X)$ and $A$ is connected, the covering $p^{-1}(A)\to A$ induced by the universal cover $p:\widetilde X\to X$ is connected, because the image of $\pi_1(A)$ is the whole deck group, lifting loops in $A$ joins every pair of points in a fibre and makes $p^{-1}(A)$ connected. An upstairs loop projects to a loop in $A$ trivial in $X$; injectivity of $\pi_1(A)\to\pi_1(X)$ makes that projected loop null in $A$, and its nullhomotopy lifts by [F3] to contract the upstairs loop. Thus $\widetilde A=p^{-1}(A)$ is simply connected; hence $\widetilde A$ is the universal cover of $A$ and both $\widetilde A$ and $\widetilde X$ are simply connected CW complexes. [F1, given]

2.1 Because the based relative complex is contractible, its homology vanishes, so by [F1] the integral relative homology $H_i(\widetilde X,\widetilde A;\mathbb Z)$ vanishes for all $i\ge0$. The pair $(\widetilde X,\widetilde A)$ is simply connected: both terms are simply connected and path connected by step 1.1, so the relative group $\pi_1(\widetilde X,\widetilde A)$ sits between two trivial groups in the long exact sequence and is trivial. [F1, step 1.1]

3.1 Show by induction on $n\ge2$ that $\pi_n(\widetilde X,\widetilde A)=0$. For $n=2$ the pair is $1$-connected by step 2.1, the space $\widetilde A$ is nonempty, path connected and simply connected, and $H_1(\widetilde X,\widetilde A;\mathbb Z)=H_2(\widetilde X,\widetilde A;\mathbb Z)=0$ by step 2.1, so relative Hurewicz gives $\pi_2(\widetilde X,\widetilde A)\cong H_2(\widetilde X,\widetilde A)=0$. For the induction step, if $\pi_j(\widetilde X,\widetilde A)=0$ for $2\le j<n$ then the pair is $(n-1)$-connected and the hypotheses of [F2] hold, so $\pi_n(\widetilde X,\widetilde A)\cong H_n(\widetilde X,\widetilde A)=0$ by step 2.1. [F2, step 2.1, induction]

4.1 By the long exact sequence of relative homotopy groups and step 3.1 the inclusion $\widetilde A\hookrightarrow\widetilde X$ induces isomorphisms on all homotopy groups, and it is a bijection on path components because both spaces are connected; hence it is a weak homotopy equivalence between CW complexes and therefore a homotopy equivalence by [F3] with the assumed AC. [F3, step 3.1]

5.1 Descend to the pair $(X,A)$. Covering maps induce isomorphisms on $\pi_i$ for $i\ge2$: every based $S^i$ map lifts uniquely because $S^i$ is simply connected, and its based homotopies lift from the chosen initial lift. A nullhomotopy disk lifts as well; its boundary lift is the original sphere lift by uniqueness. This proves both surjectivity and injectivity. Therefore for every $i\ge2$ the composite $\pi_i(A)\to\pi_i(\widetilde A)\to\pi_i(\widetilde X)\to\pi_i(X)$, in which the outer maps are the covering isomorphisms and the middle map is induced by the homotopy equivalence of step 4.1, is the isomorphism induced by the inclusion $A\hookrightarrow X$; and on $\pi_1$ the inclusion is an isomorphism by hypothesis. Therefore $A\hookrightarrow X$ is a weak homotopy equivalence between CW complexes and hence a homotopy equivalence by [F3]. [F3, step 4.1, given]

6.1 For the cobordism consequence, use the chosen finite CW pair $(X',K)\simeq(W,M_0)$ of [F4]. Contractibility gives $H_1(X',K)=H_0(X',K)=0$, so the homology sequence makes $H_0(K)\to H_0(X')$ an isomorphism; since $W$ is nonempty and connected, so is $M_0$. The fundamental-group hypothesis and relative contraction transfer to $(X',K)$, and step 5.1 shows that $K\hookrightarrow X'$ is a homotopy equivalence. The equivalence of pairs therefore gives the same conclusion for $M_0\hookrightarrow W$. [F1, F4, step 5.1]

7.1 Suppose in addition that the presentation has relative cells only in degrees $2$ and $3$, with $n\ge5$ and $\dim W=n+1\ge6$. Then the dual presentation relative to $M_1$ has handles only in degrees $n-2$ and $n-1$, both at least $3$, and attaching a handle of index $i\ge3$ to an $n$-manifold preserves the fundamental group: the attaching region $S^{i-1}\times D^{n+1-i}$ is path connected with fundamental group $\pi_1(S^{i-1})$, which is trivial for $i\ge3$, and the handle $D^i\times D^{n+1-i}$ is contractible, so the Seifert--van Kampen pushout over the connected attaching region adds no generator and no relation ([[thm-seifert-van-kampen]]); hence $\pi_1(M_1)\to\pi_1(W)$ is an isomorphism. For the dual complex, exchange core and cocore in every handle. A lifted attaching/belt intersection with label $g$ becomes the reversed incidence with label $g^{-1}$; translating its ambient orientation contributes $w(g)$, where $w:\pi_1(W)\to\{\pm1\}$ is the orientation character. Thus, up to degree signs and oriented-lift basis units, the new differential is the adjoint transpose $A^*=(\overline{a_{ji}})$ for $\bar g=w(g)g^{-1}$. This is the handle-local calculation of Ranicki’s handle-duality proposition, printed pp. 177–178. The identity $(AB)^*=B^*A^*$ shows $(A^{-1})^*$ is a two-sided inverse of $A^*$, and a two-term invertible differential has contraction its inverse. Hence the dual complex is contractible; so step 5.1 applies to the pair $(W,M_1)$ and shows that $M_1\hookrightarrow W$ is a homotopy equivalence as well; with step 6.1 both boundary inclusions are homotopy equivalences and $(W;M_0,M_1)$ is an h-cobordism. [F4, step 5.1, step 6.1] ∎
