---
id: lem-nrqm-kinematics-component-valued-wavefunction-identifications
aliases: [nrqm-kinematics-component-valued-wavefunction-identifications]
kind: lemma
domain: mathematics
title: "Unitary identifications of the component-valued wave-function space"
status: draft
origin: session
dependency_level: 2
deps: [def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces, thm-extension-of-a-bounded-map-from-a-dense-subspace, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.4, printed pages 45-47 (PDF pages 57-59): orthogonal sums and tensor products of Hilbert spaces"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1 printed pages 105-110 (PDF pages 113-118): composite systems, product states and amplitudes of a composite system; Section 7.4 printed pages 158-161 (PDF pages 166-169): finite-dimensional spin states as an internal factor of the state space"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix integers
$d\ge1$ and $r\ge1$, let $H:=L^{2}(\mathbb R^{d};\mathbb C)$ with the Euclidean
integral pairing ([[def-complex-lp-and-euclidean-test-function-conventions]],
[[def-l-p-space-as-a-quotient-by-null-functions]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]), let
$$H^{(r)}:=L^{2}\bigl(\mathbb R^{d};\mathbb C^{r}\bigr),\qquad \langle f,g\rangle:=\int_{\mathbb R^{d}}\sum_{l=1}^{r}f_{l}(x)\overline{g_{l}(x)}\,dx,$$
and let $\mathbb C^{r}$ carry the standard inner product with orthonormal basis
$e_{1},\dots,e_{r}$ ([[def-hilbert-space]],
[[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).
Write $H\widehat{\otimes}\mathbb C^{r}$ for the completed tensor product of
[[lem-nrqm-composites-hilbert-tensor-construction]] with inclusion $\kappa$.
Then:

(a) the map
$$\Psi_{0}\Bigl((f_{l})\Bigr):=\bigl(x\mapsto(f_{1}(x),\dots,f_{r}(x))\bigr)$$
is a well-defined unitary isomorphism $\bigoplus_{l=1}^{r}H\to H^{(r)}$, and
$$\|\Psi_{0}(f)\|_{H^{(r)}}^{2}=\sum_{l=1}^{r}\|f_{l}\|_{H}^{2},\qquad \langle\Psi_{0}(f),\Psi_{0}(g)\rangle=\sum_{l=1}^{r}\langle f_{l},g_{l}\rangle_{H};$$

(b) the assignment on elementary tensors
$\Theta_{0}(\kappa(u\otimes e_{l})):=\iota_{l}(u)$, where $\iota_{l}(u)$ is
the $r$-tuple with $u$ in slot $l$ and $0$ elsewhere, extends uniquely to a
surjective linear isometry $\Theta:H\widehat{\otimes}\mathbb C^{r}\to H^{(r)}$
(so $\Theta$ is unitary), and
$\Theta(\kappa(u\otimes z))=\sum_{l=1}^{r}z_{l}\,\iota_{l}(u)$ for all
$u\in H$, $z=\sum_{l}z_{l}e_{l}\in\mathbb C^{r}$;

(c) for every $a\in L^{\infty}(\mathbb R^{d})$ and every $v\in\mathbb R^{d}$ one
has the intertwining identities
$$\Theta^{-1}\bigl(a\cdot\Theta(w)\bigr)=(M_{a}\otimes I_{\mathbb C^{r}})w,\qquad \Theta^{-1}\bigl(T_{v}^{(r)}\Theta(w)\bigr)=(T_{v}\otimes I_{\mathbb C^{r}})w\qquad(w\in H\widehat{\otimes}\mathbb C^{r}),$$
where $M_{a}$ is multiplication by $a$, $T_{v}$ is the Euclidean translation
$T_{v}h:=h(\cdot-v)$ of [[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]
clause (c), $T_{v}^{(r)}$ is its componentwise action on $H^{(r)}$, and the
bounded amplifications are those of [[lem-nrqm-composites-bounded-tensor-maps]].

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; integers $d,r\ge1$; the spaces $H$, $H^{(r)}$ and the orthonormal basis $e_{1},\dots,e_{r}$ of $\mathbb C^{r}$; the completed tensor product $H\widehat{\otimes}\mathbb C^{r}$ with inclusion $\kappa$; tuples $f=(f_{l}),g=(g_{l})\in\bigoplus_{l}H$; an element $w\in H\widehat{\otimes}\mathbb C^{r}$; $a\in L^{\infty}(\mathbb R^{d})$; $v\in\mathbb R^{d}$.

[F1] **Tensor construction.** $H\odot\mathbb C^{r}$ carries the sesquilinear form $\langle\sum_{i}u_{i}\otimes z_{i},\sum_{j}u_{j}'\otimes z_{j}'\rangle =\sum_{i,j}\langle u_{i},u_{j}'\rangle_{H}\langle z_{i},z_{j}'\rangle_{\mathbb C^{r}}$, which is an inner product; for finite-dimensional subspaces with orthonormal bases, expansions diagonalize it; the completion $H\widehat{\otimes}\mathbb C^{r}$ with inclusion $\kappa$ is a complex Hilbert space with dense image and $\|\kappa(u\otimes z)\|=\|u\|\,\|z\|$ ([[lem-nrqm-composites-hilbert-tensor-construction]] clauses (a)-(c)). Moreover $(e_{l})_{l}$ is an orthonormal basis of $\mathbb C^{r}$, so the elementary tensors $u\otimes e_{l}$ have $\bigl\langle\sum_{l}u_{l}\otimes e_{l},\sum_{l}u_{l}'\otimes e_{l}\bigr\rangle =\sum_{l}\langle u_{l},u_{l}'\rangle$ and $\bigl\|\sum_{l}u_{l}\otimes e_{l}\bigr\|^{2}=\sum_{l}\|u_{l}\|^{2}$ ([[lem-nrqm-composites-hilbert-tensor-construction]] clause (b)).

[F2] **Bounded amplifications.** For bounded $S\in\mathcal B(H)$ and $T\in\mathcal B(\mathbb C^{r})$ there is a unique bounded $S\otimes T$ on $H\widehat{\otimes}\mathbb C^{r}$ with $(S\otimes T)\kappa(u\otimes z) =\kappa(Su\otimes Tz)$ and $\|S\otimes T\|\le\|S\|\,\|T\|$; for $S=M_{a}$ bounded and $T=I$ this is $M_{a}\otimes I$, and for $S=T_{v}$ unitary and $T=I$ it is $T_{v}\otimes I$ ([[lem-nrqm-composites-bounded-tensor-maps]] clauses (a),(d)).

[F3] **Euclidean $L^{2}$.** For $f=(f_{1},\dots,f_{r})\in L^{2}(\mathbb R^{d};\mathbb C^{r})$ each component $f_{l}$ is a well-defined class in $L^{2}(\mathbb R^{d};\mathbb C)$, two representatives that agree almost everywhere have almost everywhere equal components, and $|f_{l}|\le\|f\|_{\mathbb C^{r}}$ pointwise, so $\|f_{l}\|_{H}\le\|f\|_{H^{(r)}}$; conversely every $r$-tuple of $L^{2}$ classes defines a class in $H^{(r)}$ ([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F4] **Tonelli and Cauchy-Schwarz.** For $\sigma$-finite measure spaces, integrals of nonnegative product-measurable functions may be iterated ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]); for vectors $f,g$ in an inner product space $|\langle f,g\rangle|\le\|f\|\,\|g\|$ ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

[F5] **Dense extension.** A bounded linear map on a dense subspace of a normed space extends uniquely to a bounded linear map on the whole space, with the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

## Proof

**Proof technique:** direct; check well-definedness of the component map, compute norms and pairings by Tonelli and Cauchy-Schwarz, and build the tensor identification isometrically on the algebraic tensor product before extending by density.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Well-definedness of $\Psi_{0}$] Let $(f_{l})\in\bigoplus_{l}H$ and let $(\tilde f_{l})$ be another choice of representatives with $\tilde f_{l}=f_{l}$ almost everywhere for each $l$; then $(\tilde f_{1},\dots,\tilde f_{r})=(f_{1},\dots,f_{r})$ almost everywhere, so $\Psi_{0}(f)$ is the same class of $H^{(r)}$ and $\Psi_{0}$ is well defined [F3]. It is complex-linear because addition and scalar multiplication in $H^{(r)}$ are componentwise. [F3, algebra]

1.2 [Isometry] For $f=(f_{l})$ and $g=(g_{l})$ in $\bigoplus_{l}H$, the functions $x\mapsto\sum_{l}|f_{l}(x)|^{2}$ is nonnegative and measurable, so [F4] gives $\int_{\mathbb R^{d}}\sum_{l}|f_{l}|^{2} =\sum_{l}\int_{\mathbb R^{d}}|f_{l}|^{2}=\sum_{l}\|f_{l}\|_{H}^{2}$, that is $\|\Psi_{0}(f)\|^{2}=\|f\|^{2}_{\oplus}$; the map $\Psi_{0}$ is thus an isometry. For the inner product, Cauchy-Schwarz gives $\int_{\mathbb R^{d}}\sum_{l}|f_{l}||g_{l}| \le\sum_{l}\|f_{l}\|_{H}\|g_{l}\|_{H} \le\bigl(\sum_{l}\|f_{l}\|^{2}\bigr)^{1/2} \bigl(\sum_{l}\|g_{l}\|^{2}\bigr)^{1/2}<\infty$, so the integrand $\sum_{l}f_{l}\overline{g_{l}}$ is integrable and Tonelli applies to its real and imaginary parts, giving $\langle\Psi_{0}(f),\Psi_{0}(g)\rangle =\int\sum_{l}f_{l}\overline{g_{l}}=\sum_{l}\langle f_{l},g_{l}\rangle_{H}$. [F3, F4, algebra]

1.3 [The tensor identification on the algebraic tensor product] On elementary tensors put $\Theta_{0}(\kappa(u\otimes z)):=\sum_{l}z_{l}\iota_{l}(u)$ for $z=\sum_{l}z_{l}e_{l}$. The map $(u,z)\mapsto\sum_{l}z_{l}\iota_{l}(u)$ $H\times\mathbb C^{r}\to H^{(r)}$ is $\mathbb C$-bilinear, so $\Theta_{0}$ factors through the defining bilinearity relations of the algebraic tensor product $H\odot\mathbb C^{r}$ and is a well-defined complex-linear map ([[lem-nrqm-composites-hilbert-tensor-construction]] clause (a)). Every element of $H\odot\mathbb C^{r}$ can be written as $\sum_{l}w_{l}\otimes e_{l}$: a finite sum $\sum_{i}u_{i}\otimes z_{i}$ equals $\sum_{l}\bigl(\sum_{i}z_{i,l}u_{i}\bigr)\otimes e_{l}$ by bilinearity. For such an element, [F1] gives $\Theta_{0}(\sum_{l}w_{l}\otimes e_{l})=\sum_{l}\iota_{l}(w_{l})=(w_{1},\dots,w_{r})$ and $\|\sum_{l}w_{l}\otimes e_{l}\|^{2}=\sum_{l}\|w_{l}\|^{2} =\|\Theta_{0}(\sum_{l}w_{l}\otimes e_{l})\|^{2}_{H^{(r)}}$, so $\Theta_{0}$ is an isometry of the inner-product space $H\odot\mathbb C^{r}$ onto the dense subspace $\bigoplus_{l}H$ of $H^{(r)}$. [F1, algebra]

2.1 [Surjectivity] Let $g\in H^{(r)}$. By [F3] each component $g_{l}$ is an $L^{2}$ class and $g=(g_{1},\dots,g_{r})=\Psi_{0}((g_{l}))$; hence $\Psi_{0}$ is surjective, and (a) is proved. [step 1.1, step 1.2, F3]

2.2 [Extension and surjectivity] By [F5] the isometry $\Theta_{0}$ extends uniquely to a linear isometry $\Theta:H\widehat{\otimes}\mathbb C^{r}\to H^{(r)}$, because $\kappa(H\odot\mathbb C^{r})$ is dense in the completion ([[lem-nrqm-composites-hilbert-tensor-construction]] clause (c)) and $H^{(r)}$ is complete. Its image contains the dense subspace $\bigoplus_{l}H$ and is complete, hence closed in $H^{(r)}$; therefore $\Theta$ is surjective, so it is unitary. This proves (b) except for the displayed formula, which holds on elementary tensors by construction and extends to all $w$ by continuity of the bounded operators involved. [step 1.3, F1, F5, algebra]

3.1 [Intertwining identities] For $u\in H$ and $z=\sum_{l}z_{l}e_{l}$, $\Theta^{-1}\bigl(a\,\Theta(\kappa(u\otimes z))\bigr) =\Theta^{-1}\bigl(a\sum_{l}z_{l}\iota_{l}(u)\bigr) =\Theta^{-1}\bigl(\sum_{l}z_{l}\iota_{l}(au)\bigr) =\kappa(au\otimes z)=(M_{a}\otimes I)\kappa(u\otimes z)$, where the last identity is [F2]; similarly $\Theta^{-1}\bigl(T_{v}^{(r)}\Theta(\kappa(u\otimes z))\bigr) =\kappa(T_{v}u\otimes z)=(T_{v}\otimes I)\kappa(u\otimes z)$, since $T_{v}^{(r)}$ acts componentwise and $T_{v}^{(r)}\iota_{l}(u)=\iota_{l}(T_{v}u)$ ([[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]] clause (c)). Both sides of each identity are bounded operators (the amplifications are bounded by [F2], and $\Theta$ is unitary by step 2.2), and the elementary tensors have dense span in $H\widehat{\otimes}\mathbb C^{r}$ [F1]; hence the identities hold on all of $H\widehat{\otimes}\mathbb C^{r}$. This proves (c). [step 1.3, step 2.2, F1, F2, algebra] ∎

## Remarks

- **Two descriptions of one space.** Clause (b) says that a finite internal
  factor $\mathbb C^{r}$ may be read either as a tensor factor or as component
  bookkeeping; the component reading is the one used by the model definition on
  this page. Nothing here identifies a component index with a spatial
  direction or an observable.
- **Only bounded amplifications.** The intertwining identities of clause (c)
  use the bounded amplifications of the cited supplier; no unbounded operator
  is extended or transported by this lemma.
