---
id: lem-nrqm-many-body-one-body-reduction-trace-law
aliases: [nrqm-many-body-one-body-reduction-trace-law]
kind: lemma
domain: mathematics
title: "The one-body reduction trace law of the finite-mode permutation sectors"
status: draft
origin: pipeline
dependency_level: 3
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-permutation-sector-projections, thm-nrqm-composites-finite-partial-trace-and-schmidt, lem-nrqm-composites-density-and-scalar-spectral-probability, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-cyclicity-of-the-trace, prop-trace-is-linear, thm-extension-of-a-bounded-map-from-a-dense-subspace, def-linear-isometry-and-orthogonal-or-unitary-operator, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-trace-of-an-endomorphism, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-countable-choice, lem-nrqm-composites-rank-one-operator-calculus]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  thm-nrqm-composites-finite-partial-trace-and-schmidt: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  cor-finite-iterated-tensor-products-represent-multilinear-maps: mathematical-premise
  thm-cyclicity-of-the-trace: mathematical-premise
  prop-trace-is-linear: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3.1 printed pages 125-127 (PDF pages 133-135): the reduced density operator obtained by tracing out the environment, equations (6.75)-(6.80)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Topics in Real and Functional Analysis (November 17, 2017), Section 3.6 printed pages 93-98: trace-class operators, partial traces and cyclicity of the trace"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space of finite dimension $d\ge1$
([[def-hilbert-space]]), let $n\ge1$, let $H^{\otimes n}$ be the $n$-fold
completed tensor power with $H^{\otimes0}:=\mathbb C$, $H^{\otimes1}:=H$ and
$H^{\otimes(k+1)}:=H^{\otimes k}\widehat\otimes H$, let $(U_\pi)_{\pi\in S_n}$
be the permutation unitaries and let
$P_\sigma^{(n)}$, $\sigma\in\{+,-\}$, be the sector projections
([[lem-nrqm-composites-permutation-sector-projections]]), with sector space
$$\mathfrak H_n^\sigma:=\operatorname{ran}P_\sigma^{(n)}\subseteq H^{\otimes n}.$$
For $O\in\mathcal B(H)$ and $i\in\{1,\dots,n\}$ let $O^{(i)}\in\mathcal B(H^{\otimes n})$
be the operator of clause (a) below, and put
$$\Sigma(O):=\sum_{i=1}^n O^{(i)}\in\mathcal B(H^{\otimes n}).$$
Identify $H^{\otimes n}$ with $H\widehat\otimes H^{\otimes(n-1)}$ by the
surjective linear isometry $J_n$ of clause (b) below, and let
$\operatorname{Tr}_{H^{\otimes(n-1)}}$ be the partial trace of
[[thm-nrqm-composites-finite-partial-trace-and-schmidt]] clause (a) over the
second factor of that identification. Then:

(a) *slot operators*: for every $O\in\mathcal B(H)$ and every
$i\in\{1,\dots,n\}$ there is a unique $O^{(i)}\in\mathcal B(H^{\otimes n})$
with $O^{(i)}(v_1\otimes\cdots\otimes v_n)=v_1\otimes\cdots\otimes v_{i-1}\otimes Ov_i\otimes v_{i+1}\otimes\cdots\otimes v_n$
for all $v_1,\dots,v_n\in H$; it satisfies $\|O^{(i)}\|\le\|O\|$ and
$(O^*)^{(i)}=(O^{(i)})^*$; in particular $O=O^*$ gives $O^{(i)}=(O^{(i)})^*$;

(b) *parenthesisation*: the assignment
$v_1\otimes\cdots\otimes v_n\mapsto v_1\otimes(v_2\otimes\cdots\otimes v_n)$
extends to a surjective linear isometry
$J_n:H^{\otimes n}\to H\widehat\otimes H^{\otimes(n-1)}$; for $n=1$ the
empty product is $1\in\mathbb C$ and $J_1u=u\otimes1$;

(c) *permutation invariance*: $U_\pi\,\Sigma(O)\,U_\pi^*=\Sigma(O)$ for every
$\pi\in S_n$; consequently $\Sigma(O)$ preserves both sector spaces and commutes with $P_\sigma^{(n)}$:
$$\Sigma(O)P_\sigma^{(n)}=P_\sigma^{(n)}\Sigma(O)=P_\sigma^{(n)}\Sigma(O)P_\sigma^{(n)};$$

(d) *trace law*: for every density operator $\rho$ on the sector space
$\mathfrak H_n^\sigma$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]]
clause (a)), let $j:\mathfrak H_n^\sigma\hookrightarrow H^{\otimes n}$ be
the isometric inclusion and define its zero extension
$\widetilde\rho:=j\rho j^*\in\mathcal B(H^{\otimes n})$; then
for every $O\in\mathcal B(H)$ one has $\operatorname{tr}(\widetilde\rho\,\Sigma(O))=n\,\operatorname{tr}(\gamma\,O)$,
where $\gamma:=\operatorname{Tr}_{H^{\otimes(n-1)}}\bigl(J_n\widetilde\rho J_n^{-1}\bigr)\in\mathcal B(H)$;

(e) *the reduced operator is a density operator*: the operator $\gamma$ of
clause (d) is a density operator on $H$; it is independent of the choice of
slot in the sense that it equals the partial trace of $\widetilde\rho$ over
the other $n-1$ slots in the parenthesisation in which the retained slot is
the one the display names; for $n=1$, $\gamma=\rho$. If
$\mathfrak H_n^\sigma=\{0\}$, there is no density operator of trace one on
that sector, so clauses (d)-(e) make no assertion about a sector preparation;

(f) *scope*: clauses (a)-(e) are exact operator identities on the
finite-dimensional labelled tensor powers; no physical system, particle
species, preparation or measurement is asserted, and the parameter $n$ is a
dimension count of the construction, not an observed particle number.

## Facts & Assumptions

**Given:** the finite-dimensional complex Hilbert space $H$ of dimension $d\ge1$, the integer $n\ge1$, the completed tensor powers $H^{\otimes n}$ with permutation unitaries $U_\pi$ and sector projections $P_\sigma^{(n)}$, the operator $O\in\mathcal B(H)$, the slot index $i$, and the density operator $\rho$ on $\mathfrak H_n^\sigma$ with its zero extension $\widetilde\rho$.

[F1] **Tensor powers.** $H^{\otimes n}$ is a complex Hilbert space; the elementary tensors have dense linear span; $\|v_1\otimes\cdots\otimes v_n\|=\|v_1\|\cdots\|v_n\|$ and $\langle v_1\otimes\cdots\otimes v_n,w_1\otimes\cdots\otimes w_n\rangle=\prod_{k}\langle v_k,w_k\rangle$; for orthonormal families spanning $H$ the corresponding elementary tensors form an orthonormal family with dense span ([[lem-nrqm-composites-hilbert-tensor-construction]] clauses (b), (c), (d)).

[F2] **Parenthesisation.** For every parenthesisation the iterated tensor product represents multilinear maps, and different parenthesisations are connected by the unique isomorphism preserving pure tensors ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F3] **Bounded tensor maps.** For complex Hilbert spaces $V,W$ and $S\in\mathcal B(V)$, $T\in\mathcal B(W)$ there is a unique $S\otimes T\in\mathcal B(V\widehat\otimes W)$ with $(S\otimes T)(u\otimes v)=Su\otimes Tv$, $\|S\otimes T\|\le\|S\|\,\|T\|$, $(S\otimes T)^*=S^*\otimes T^*$, and for endomorphisms $S\otimes I$ and $I\otimes T$ commute ([[lem-nrqm-composites-bounded-tensor-maps]] clauses (a), (b), (c)).

[F4] **Permutation unitaries and sectors.** $U_\pi$ is unitary with $U_\pi(v_1\otimes\cdots\otimes v_n)=v_{\pi^{-1}(1)}\otimes\cdots\otimes v_{\pi^{-1}(n)}$ and $U_\pi U_\sigma=U_{\pi\sigma}$; $U_\pi P_+^{(n)}=P_+^{(n)}U_\pi=P_+^{(n)}$ and $U_\pi P_-^{(n)}=P_-^{(n)}U_\pi=\operatorname{sgn}(\pi)P_-^{(n)}$; the range of $P_+^{(n)}$ is the subspace of vectors fixed by every $U_\pi$, and the range of $P_-^{(n)}$ is the subspace of vectors transforming by $\operatorname{sgn}$ ([[lem-nrqm-composites-permutation-sector-projections]] clauses (a), (b), (c)).

[F5] **Partial trace.** For endomorphisms $R$ of $V\otimes W$ with $V,W$ finite-dimensional, there is a unique endomorphism $\operatorname{Tr}_W R$ of $V$ with $\operatorname{tr}((\operatorname{Tr}_WR)A)=\operatorname{tr}(R(A\otimes I_W))$ for every $A\in\operatorname{End}(V)$, independent of the orthonormal basis used in its construction; if $R\ge0$ and $\operatorname{tr}R=1$ then $\operatorname{Tr}_WR\ge0$ and $\operatorname{tr}\operatorname{Tr}_WR=1$ ([[thm-nrqm-composites-finite-partial-trace-and-schmidt]] clauses (a), (b)).

[F6] **Density operators.** A density operator on a nonzero complex Hilbert space is a self-adjoint positive trace-class operator of trace one ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a), [[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]]).

[F7] **Trace laws.** The trace of an endomorphism of a finite-dimensional space is basis independent, linear, and $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ ([[def-trace-of-an-endomorphism]], [[prop-trace-is-linear]]); for a trace-class operator $T$ and bounded $S$ one has $\operatorname{tr}(ST)=\operatorname{tr}(TS)$ ([[thm-cyclicity-of-the-trace]]).

[F8] **Agreement on dense sets.** Two bounded linear operators from a normed space into a Banach space that agree on a dense subspace are equal ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

[F9] **Unitary conjugation preserves the operator norm.** If $U$ is unitary then $\|UTU^*\|=\|T\|$ ([[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[def-operator-norm]], [[def-bounded-linear-operator]]).

## Proof

**Proof technique:** direct; construct the slot operators by conjugating the first-slot tensor map with a permutation unitary, transport the partial trace through the parenthesisation isometry, and reduce every slot to the first by permutation invariance and cyclicity.

**Given:** the data of the statement and [F1]-[F9].

1.1 [The parenthesisation isometry] For $n=1$, $J_1u=u\otimes1$ is an isometry by [F1], and every tensor in $H\widehat\otimes\mathbb C$ equals $u\otimes1$, so it is surjective. For $n\ge2$, the map $(v_1,\dots,v_n)\mapsto v_1\otimes(v_2\otimes\cdots\otimes v_n)$ is multilinear from $H^n$ into $H\widehat\otimes H^{\otimes(n-1)}$, so by [F2] applied to the two parenthesisations of the $n$-fold algebraic tensor product it defines a linear map on the algebraic tensor product, and this linear map preserves inner products on elementary tensors by [F1]: $\langle v_1\otimes\cdots\otimes v_n,w_1\otimes\cdots\otimes w_n\rangle=\prod_k\langle v_k,w_k\rangle=\langle v_1,w_1\rangle\langle v_2\otimes\cdots\otimes v_n,w_2\otimes\cdots\otimes w_n\rangle$. Since the elementary tensors span a dense subspace and both sides are complete, [F8] and this isometry identity give a linear isometry $J_n$ on the completed tensor powers, and the image is closed and contains all elementary tensors $v_1\otimes(v_2\otimes\cdots\otimes v_n)$, whose span is dense by [F1]; hence $J_n$ is surjective. This proves (b). [F1, F2, F8, algebra]

1.2 [The first-slot operator] By [F3] the operator $O\otimes I_{H^{\otimes(n-1)}}\in\mathcal B(H\widehat\otimes H^{\otimes(n-1)})$ is bounded with $(O\otimes I)(u\otimes w)=Ou\otimes w$. Transporting it through the isometry $J_n$ of clause (b) gives a bounded operator $A_1:=J_n^{-1}(O\otimes I)J_n$ on $H^{\otimes n}$ with $A_1(v_1\otimes\cdots\otimes v_n)=J_n^{-1}(Ov_1\otimes(v_2\otimes\cdots\otimes v_n))=Ov_1\otimes v_2\otimes\cdots\otimes v_n$ for all $v_1,\dots,v_n\in H$. [F1, F3, algebra]

1.3 [The zero extension and its symmetry] With $j$ the inclusion of the sector, $\widetilde\rho=j\rho j^*$ restricts to $\rho$ on the sector and vanishes on its orthogonal complement. It is self-adjoint and positive because $\langle\widetilde\rho x,x\rangle=\langle\rho j^*x,j^*x\rangle\ge0$; adjoining an orthonormal basis of the complement to one of the sector gives $\operatorname{tr}\widetilde\rho=\operatorname{tr}\rho=1$, so it is a density operator by [F6]. Since $jj^*=P_\sigma^{(n)}$ and $U_\pi j=\operatorname{sgn}_\sigma(\pi)j$ by [F4], $\widetilde\rho=P_\sigma^{(n)}\widetilde\rho P_\sigma^{(n)}$ and $U_\pi\widetilde\rho U_\pi^*=\widetilde\rho$ for every $\pi$. A zero sector admits no trace-one endomorphism, so no $\rho$ exists in that case. [F4, F6, F7, algebra]

2.1 [Slot operators and the permutation invariance of their sum] Fix $i$, choose $\pi\in S_n$ with $\pi(1)=i$ and set $O^{(i)}:=U_\pi A_1U_\pi^*\in\mathcal B(H^{\otimes n})$; [F9] and step 1.2 give $\|O^{(i)}\|=\|O\otimes I\|\le\|O\|$, and [F3], [F4] give $(O^{(i)})^*=U_\pi J_n^{-1}(O^*\otimes I)J_nU_\pi^*=(O^*)^{(i)}$, so $O=O^*$ gives $O^{(i)}=(O^{(i)})^*$. On elementary tensors, [F4] gives $U_\pi^*(v_1\otimes\cdots\otimes v_n)=v_{\pi(1)}\otimes\cdots\otimes v_{\pi(n)}$; step 1.2 replaces the first factor by $Ov_{\pi(1)}=Ov_i$; and $U_\pi$ then moves that factor to slot $\pi(1)=i$, leaving every other factor in its original slot, so $O^{(i)}(v_1\otimes\cdots\otimes v_n)=v_1\otimes\cdots\otimes Ov_i\otimes\cdots\otimes v_n$. If $\pi'$ is another permutation with $\pi'(1)=i$, then $\tau:=\pi^{-1}\pi'$ fixes $1$ and $U_\tau A_1U_\tau^*$ agrees with $A_1$ on elementary tensors by [F1], [F3], hence equals it by [F8]; thus $U_{\pi'}A_1U_{\pi'}^*=U_\pi U_\tau A_1U_\tau^*U_\pi^*=U_\pi A_1U_\pi^*$ and $O^{(i)}$ is well defined, with the displayed elementary-tensor action. For $\tau\in S_n$ one then has $U_\tau O^{(i)}U_\tau^*=U_{\tau\pi}A_1U_{\tau\pi}^*=O^{(\tau(i))}$, and summing over $i$ with $\tau$ permuting $\{1,\dots,n\}$ gives $U_\tau\Sigma(O)U_\tau^*=\Sigma(O)$ for $\Sigma(O):=\sum_{i=1}^nO^{(i)}$; equivalently $\Sigma(O)$ commutes with every $U_\tau$. Since $P_\sigma^{(n)}=\frac1{n!}\sum_{\pi\in S_n}\operatorname{sgn}_\sigma(\pi)U_\pi$ is a finite linear combination of the $U_\pi$ by [F4], $\Sigma(O)$ commutes with $P_\sigma^{(n)}$, so it preserves $\mathfrak H_n^\sigma$ and its orthogonal complement and $\Sigma(O)P_\sigma^{(n)}=P_\sigma^{(n)}\Sigma(O)=P_\sigma^{(n)}\Sigma(O)P_\sigma^{(n)}$; this proves (a) and (c). [F1, F3, F4, F8, F9, step 1.2, algebra]

3.1 [Reduction to one slot, the trace law and the reduced operator] By steps 1.3 and 2.1 and [F7], for $\pi(1)=i$ one has $\operatorname{tr}(\widetilde\rho O^{(i)})=\operatorname{tr}(U_\pi^*\widetilde\rho U_\pi A_1)=\operatorname{tr}(\widetilde\rho A_1)$. Set $R_n:=J_n\widetilde\rho J_n^{-1}$, an endomorphism of $H\widehat\otimes H^{\otimes(n-1)}$. Its partial trace $\gamma:=\operatorname{Tr}_{H^{\otimes(n-1)}}R_n$ is an endomorphism of $H$ by [F5]. Step 1.2 and [F5], [F7] give $\operatorname{tr}(\widetilde\rho\Sigma(O))=n\operatorname{tr}(\widetilde\rho A_1)=n\operatorname{tr}(R_n(O\otimes I))=n\operatorname{tr}(\gamma O)$, proving (d). Unitary transport by $J_n$ preserves positivity and trace, so $R_n$ is positive of trace one; [F5] then makes $\gamma$ positive of trace one and hence a density operator on $H$ by [F6]. For the retained slot $i$, use $J_nU_\pi^*$ as the parenthesisation map; its transported state is $J_nU_\pi^*\widetilde\rho U_\pi J_n^{-1}=R_n$ by step 1.3, so its partial trace is the same $\gamma$. More generally the pairing $\operatorname{tr}(\gamma O)=n^{-1}\operatorname{tr}(\widetilde\rho\Sigma(O))$ for every $O$ uniquely determines $\gamma$: testing against $O=T_{u,v}$ gives $\operatorname{tr}(\gamma T_{u,v})=\langle\gamma u,v\rangle$ by [[lem-nrqm-composites-rank-one-operator-calculus]] clause (e), which determines every matrix entry. For $n=1$, $J_1u=u\otimes1$, $P_\sigma^{(1)}=I$ and $\Sigma(O)=O$, so this pairing gives $\gamma=\rho$. This proves (e), including the one-particle boundary. [F4, F5, F6, F7, step 1.1, step 1.2, step 1.3, step 2.1, algebra]

4.1 [Conclusion and scope] Step 1.1 proves (b), step 2.1 proves (a) and (c), and step 3.1 proves (d) and (e); every argument used only the finite-dimensional tensor construction, the permutation sectors, the partial trace and the trace axioms, and no physical object, preparation or measurement entered, which is clause (f). [step 1.1, step 2.1, step 3.1] ∎

## Remarks

- **Reading of the identities.** The law $\operatorname{tr}(\widetilde\rho\,\Sigma(O))=n\operatorname{tr}(\gamma O)$ says that the mean of the sum of one-body slot operators in the sector preparation is $n$ times the trace pairing of a single one-particle operator with a reduced operator $\gamma$ on the one-particle space. Only the identity is asserted here; its physical reading requires the framework postulates and a declared preparation, and is stated separately.
- **Why the factor $n$ appears.** The sum $\Sigma(O)$ has $n$ slot terms with equal pairings by permutation invariance of the sector state, and $\gamma$ is normalised once, $\operatorname{tr}\gamma=1$; the factor $n$ is the multiplicity of the sum, not a further normalisation.
