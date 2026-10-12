## Proper Cohomological Descent And Constructible Hypercovers

A: `proper-cohomological-descent-and-constructible-hypercovers`; B: `proper-cohomological-descent-and-constructible-hypercovers-examples`. Both belong to `frontier-44-special-representation-examples-28`.

Read the full linked research carriers and source ledgers. These remain draft authoring inputs and open construction contracts; no mathematical or native acceptance is implied.

### Suppliers

**`lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization`**

For a bicosimplicial complex $K^{p,r,q}$ of modules over a commutative ring, with $p,r\geq0$ and one fixed lower bound $q\geq a$, the alternating-face total complex and the diagonal alternating-face total complex are naturally chain-homotopy equivalent:
$$\operatorname{Tot}_{p,r,q}K^{p,r,q}\simeq\operatorname{Tot}_{n,q}K^{n,n,q}.$$
On the left total degree is $p+r+q$ and differential is $\delta_h+(-1)^p\delta_v+(-1)^{p+r}d$; on the right total degree is $n+q$ and differential is $\delta_{\mathrm{diag}}+(-1)^nd$. These comparisons preserve augmentation and apply to coherent derived diagrams after a supplied functorial strict resolution. They require no dimensional finiteness of the coefficient modules and no choice principle. Normalization can be applied on either side without changing the conclusion.

Author input: `not-yet-authored; exact logical metadata is retained in the frozen same-frontier proposal`. Current status: research draft; no mathematical acceptance is claimed.

Declared inputs: `lem-simplicial-normalization-prism-and-trivial-fibration-criterion`, `prop-sum-and-product-totalisations-agree-on-finite-diagonal-double-complexes`. These do not certify their suppliers or imply the proof is complete.

**`lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`**

Assume the Axiom of Choice inherited from the supplied injective-resolution six-functor construction. Let $f:Y\to X$ be a proper surjective morphism of finite-type complex algebraic varieties, and let $F\in D^b_c(X;k)$ for a field $k$. Write $Y_p=Y\times_X\cdots\times_XY$ with $p+1$ factors, $f_p:Y_p\to X$, and $F_p=f_p^*F$. In the analytic topology the natural augmented derived Čech map is a quasi-isomorphism:
$$F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Rf_{p*}F_p.$$
Here totalization is the normalized or unnormalized alternating-face total supplied by the simplicial-derived construction. There is one fixed lower cochain bound; consequently its diagonals are finite in every degree. The claim commutes with arbitrary algebraic base change and coefficient morphisms. In particular $R\Gamma(X,F)\simeq\operatorname{Tot}_pR\Gamma(Y_p,F_p)$. Individual fibers of $f$ need not be cohomologically acyclic, connected, or smooth.

Author input: `research/frontier-44-special-representation-examples-28-klr-foundation-descent-drafts/items/lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves.md`. Current status: research draft; no independent mathematical acceptance inferred.

Declared inputs: `def-axiom-of-choice`, `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`, `lem-analytic-constructible-sheaves-admit-coherent-six-operations`, `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`. These do not certify their suppliers or imply the proof is complete.

**`thm-proper-hypercovers-compute-constructible-derived-cohomology`**

Assume the Axiom of Choice as inherited from the supplied six-functor resolutions. Let $X_\bullet\to X$ be an augmented simplicial finite-type complex algebraic variety. Assume $X_0\to X$ is proper surjective and, for each $p>0$, $X_p\to(\operatorname{cosk}_{p-1}\operatorname{sk}_{p-1}X_\bullet)_p$ is proper surjective over $X$. Such an object is a proper hypercover; no smoothness or fiber acyclicity is assumed. For $F\in D^b_c(X;k)$ over a field, and $a_p:X_p\to X$, the augmentation gives
$$F\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}Ra_{p*}a_p^*F,\qquad R\Gamma(X,F)\xrightarrow{\sim}\operatorname{Tot}_{p\geq0}R\Gamma(X_p,a_p^*F).$$
There is a natural strongly convergent spectral sequence $E_1^{p,q}=H^q(X_p,a_p^*F)\Rightarrow H^{p+q}(X,F)$. If $F$ has cochain lower bound $a$, every diagonal $p+q=m$ is finite; degree $m$ and its differential are determined by levels through $p=m-a+1$. All proper-hypercover refinements induce the same comparison via the base object; any two such hypercovers have a proper common refinement. For $F=k_X$, $a=0$, this is the first-quadrant spectral sequence required for smooth-projective hyperresolutions.

Author input: `research/frontier-44-special-representation-examples-28-klr-foundation-descent-drafts/items/thm-proper-hypercovers-compute-constructible-derived-cohomology.md`. Current status: research draft; no independent mathematical acceptance inferred.

Declared inputs: `def-axiom-of-choice`, `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`, `lem-bicosimplicial-derived-total-complex-agrees-with-diagonal-totalization`, `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`, `lem-analytic-constructible-sheaves-admit-coherent-six-operations`, `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`, `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`. These do not certify their suppliers or imply the proof is complete.

### Examples

**`ex-proper-cech-descent-does-not-require-acyclic-fibers`**

Planned construction target: Ex proper cech descent does not require acyclic fibers. Full proof is not supplied in a physical carrier; consult its exact construction contract and current author packet. This is an unresolved obligation.

Declared inputs: `lem-proper-surjective-maps-have-cohomological-descent-for-constructible-field-sheaves`, `cor-homology-of-spheres`, `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`. These do not certify their suppliers or imply the proof is complete.

**`ex-hypercover-total-degree-uses-only-a-finite-matching-truncation`**

Planned construction target: Ex hypercover total degree uses only a finite matching truncation. Full proof is not supplied in a physical carrier; consult its exact construction contract and current author packet. This is an unresolved obligation.

Declared inputs: `thm-proper-hypercovers-compute-constructible-derived-cohomology`. These do not certify their suppliers or imply the proof is complete.
