---
id: thm-generic-irreducibility-and-the-exceptional-parameter-lattice
kind: theorem
title: Generic irreducibility and the exceptional parameter lattice
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 6
deps:
  - def-normalized-principal-series-i-epsilon-nu
  - thm-compact-picture-of-the-sl2-principal-series
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces
  - def-special-linear-lie-algebra-sl-two
  - def-killing-form-of-a-finite-dimensional-lie-algebra
  - def-killing-form-of-a-semisimple-lie-algebra
  - def-quadratic-casimir-element
  - prop-the-quadratic-casimir-element-is-central
  - def-harish-chandra-projection
  - thm-harish-chandra-isomorphism-for-the-center
  - def-central-character-of-a-lie-algebra-module
  - thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - cor-normalized-haar-measure-on-a-compact-lie-group
  - def-period-one-fourier-coefficients-partial-sums-and-convolution
  - def-cesaro-and-abel-means-of-a-fourier-series
  - thm-fejer-uniform-convergence-for-continuous-periodic-functions
  - thm-integration-by-parts
  - thm-continuous-implies-integrable
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-cartans-semisimplicity-criterion
  - def-cartan-subalgebra-of-a-lie-algebra
  - def-root-and-root-space-relative-to-a-cartan-subalgebra
  - thm-the-root-set-is-a-reduced-crystallographic-root-system
  - def-killing-dual-vector-attached-to-a-root
  - def-root-reflections-and-the-weyl-group-action
  - def-fundamental-weights-for-a-chosen-simple-root-system
  - def-countable-choice
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes,
        Fall 2023)
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: §9.1, formulas (4)–(5) and principal-series short exact sequences,
        printed pp. 48–49; §9.2 realization and parameter convention s=-nu,
        printed p. 50
    - title: Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop
        writeup)
      url: https://www.math.wustl.edu/~matkerr/sl2notes.pdf
      locator: §2, formula (2.6), Examples 2.6–2.7 and the classification paragraph, printed pp. 10–12
    - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups
        (AMS GSM 155; author's PDF)
      url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
      locator: §7.4, Proposition 7.4.3(2), statement printed p. 294 and proof pp. 297–301; unitary-character
        irreducibility criterion as a unitary-axis cross-check
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$ and $\mathcal W_\varepsilon=\{\nu\in\mathbb Z:\nu\equiv\varepsilon+1\ (2)\}$.
Write $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ for the complexified Lie algebra acting on $I^K_{\varepsilon,\nu}$. 

**(a) Generic irreducibility.** If $\nu\notin\mathcal W_\varepsilon$, then $I^K_{\varepsilon,\nu}$ is an algebraically irreducible $(\mathfrak g,K)$-module. The compact-picture representation on $L^2_\varepsilon(K)$ is irreducible in the Hilbert-space sense, and the smooth induced representation $I_{\varepsilon,\nu}\cong C^\infty_\varepsilon(K)$ is topologically irreducible in its usual $C^\infty$ compact-picture topology (there is no nonzero proper closed $G$-invariant subspace).

**(b) Exceptional parameters.** Let $n\in\mathcal W_\varepsilon$, $n\ge1$. Then $I^K_{\varepsilon,n}$ has composition length $3$ with composition factors
$$L_{n-1}\ (\text{finite-dimensional, K-types } n-1,n-3,\dots,-(n-1)),$$
$M^-_{n+1}\ (\text{K-types } n+1,n+3,\dots),\qquad M^+_{-(n+1)}\ (\text{K-types } -(n+1),-(n+3),\dots).$
Here $M^-_{n+1}$ and $M^+_{-(n+1)}$ denote the irreducible one-sided modules with these respective K-type strings and inherited ladder action.
For $\nu=n$ the finite-dimensional factor $L_{n-1}$ is the unique irreducible quotient and $M^-_{n+1}\oplus M^+_{-(n+1)}$ is the unique maximal proper submodule; for $\nu=-n$ the roles are reversed ($L_{n-1}$ is the unique irreducible submodule and $M^-_{n+1}\oplus M^+_{-(n+1)}$ is the quotient). For $\varepsilon=1$ and $\nu=0$ one has the direct sum $I^K_{1,0}\cong M^-_1\oplus M^+_{-1}$ of the two limits of discrete series.

The quadratic Casimir element of [[def-quadratic-casimir-element]] acts on $I^K_{\varepsilon,\nu}$ by the scalar $\tfrac18(\nu^2-1)$, and at $\nu=n$ on the factor $L_{n-1}$ by $\tfrac18(n^2-1)$. For $\mathfrak{sl}_2$ the center of $U(\mathfrak g)$ is generated by this Casimir, so the central character exists and determines $\nu$ up to sign.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, $\nu\in\mathbb C$, the smooth compact-picture model, and $H=L^2_\varepsilon(K)$.

[F1] The smooth compact-picture action is $(\Pi_\nu(g)f)(k)=|\alpha(p(k,g))|^{1+\nu}f(\kappa(k,g))$, and its restriction to $K$ is right translation ([[thm-compact-picture-of-the-sl2-principal-series]], [[def-normalized-principal-series-i-epsilon-nu]]).

[F2] The modes $f_r(k_\theta)=e^{ir\theta}$, $r\equiv\varepsilon\pmod2$, form an orthonormal basis of $H$; their finite span is $I^K_{\varepsilon,\nu}$ and is dense in $H$ ([[lem-k-type-decomposition-of-the-sl2-principal-series]]).

[F3] The derived action is $L_Wf_r=rf_r$, $L_{E_+}f_r=(1+\nu+r)f_{r+2}/2$, and $L_{E_-}f_r=(1+\nu-r)f_{r-2}/2$ ([[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]]).

[F4] The smooth compact-picture action extends to a strongly continuous representation on $H$ for every $\nu\in\mathbb C$; every nonzero closed $G$-invariant subspace of $H$ contains a nonzero $K$-finite vector, and its $K$-finite intersection is a $(\mathfrak g,K)$-submodule ([[lem-k-finite-vectors-detect-nonzero-closed-invariant-subspaces]]).

[F5] Under $k_{2\pi t}\leftrightarrow[t]\in\mathbb T=\mathbb R/\mathbb Z$, normalized Haar measure on $K$ is the normalized torus integral on $[0,1)$ ([[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]], [[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[cor-normalized-haar-measure-on-a-compact-lie-group]]).

[F6] For a one-periodic integrable $g$, $\widehat g(r)=\int_0^1g(t)e^{-2\pi i rt}\,dt$, $S_Ng=\sum_{|r|\le N}\widehat g(r)e^{2\pi i rt}$, and $\sigma_Ng=(N+1)^{-1}\sum_{j=0}^NS_jg$ ([[def-period-one-fourier-coefficients-partial-sums-and-convolution]], [[def-cesaro-and-abel-means-of-a-fourier-series]]).

[F7] If $g$ is continuous and one-periodic, its Fejér means satisfy $\sup_t|\sigma_Ng(t)-g(t)|\to0$ ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

[F8] Repeated integration by parts gives $\widehat{g^{(q)}}(r)=(2\pi ir)^q\widehat g(r)$ for smooth periodic $g$: apply the real formula to real and imaginary parts, whose continuous derivatives are Riemann integrable, and use equality of bounded Riemann and Lebesgue integrals ([[thm-integration-by-parts]], [[thm-continuous-implies-integrable]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F9] The closed box $[0,1]^2$ is compact in its Euclidean metric, so every continuous function on it is uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]]).

[F10] The matrix basis $W,E_+,E_-$ from the derived-action supplier has brackets $[W,E_\pm]=\pm2E_\pm$, $[E_+,E_-]=W$ ([[def-special-linear-lie-algebra-sl-two]], [[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]]).

[F11] For semisimple $\mathfrak g$, the quadratic Casimir is the sum formed from Killing-dual bases and is central; the shifted Harish-Chandra map is the algebra isomorphism $\operatorname{HC}_\rho(z)(\lambda)=\operatorname{pr}(z)(\lambda-\rho)$ onto $S(\mathfrak h)^W$ ([[def-killing-form-of-a-semisimple-lie-algebra]], [[def-quadratic-casimir-element]], [[prop-the-quadratic-casimir-element-is-central]], [[def-harish-chandra-projection]], [[thm-harish-chandra-isomorphism-for-the-center]]).

[F12] Every finite-dimensional simple $\mathfrak g$-module is the unique simple highest-weight module for its dominant integral highest weight ([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]).

[F13] A central character is a unital algebra homomorphism $\chi:Z(U(\mathfrak g))\to\mathbb C$ such that each central element acts by its scalar value under $\chi$ ([[def-central-character-of-a-lie-algebra-module]]).

[F14] A Cartan subalgebra is nilpotent and self-normalizing, its roots and root spaces are the nonzero eigenspaces of the adjoint action and form a reduced crystallographic root system, each root has its Killing-dual vector, and a root reflection acts by $s_\alpha(\lambda)=\lambda-\lambda(\alpha^\vee)\alpha$ ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[thm-the-root-set-is-a-reduced-crystallographic-root-system]], [[def-killing-dual-vector-attached-to-a-root]], [[def-root-reflections-and-the-weyl-group-action]]).

[F15] For a finite-dimensional Lie algebra, $B(X,Y)=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)$; over a characteristic-zero field, the algebra is semisimple exactly when this Killing form is nondegenerate ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[thm-cartans-semisimplicity-criterion]]).

[F16] For the chosen rank-one simple root, the fundamental weight satisfies $\omega(\alpha^\vee)=1$ ([[def-fundamental-weights-for-a-chosen-simple-root-system]]).

[A1] AC supplies normalized Haar probability on $K$, is the premise of the $K$-finite detection result [F4], the root-system and Killing-dual-vector inputs [F14], and the Harish-Chandra isomorphism [F11], and implies the AC$_\omega$ hypothesis used for the period-one Fourier coefficients and Fejér means [F6]–[F7]. No vector or weight is selected by an additional choice principle ([[def-countable-choice]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** establish the rank-one Lie data, connect the K-weight graph, identify exceptional boundary cuts, and compute the central scalar.

1.1 In the basis of [F10], $\operatorname{ad}_W=\operatorname{diag}(0,2,-2)$ and $\operatorname{ad}_{E_+}\operatorname{ad}_{E_-}$ has diagonal entries $2,2,0$. The reversed composition has diagonal entries $2,0,2$ by the same brackets; each product with one $W$ and one $E_\pm$, or with two equal $E_\pm$, is off-diagonal. Thus the Killing matrix is $\begin{pmatrix}8&0&0\\0&0&4\\0&4&0\end{pmatrix}$ with determinant $-128$, so $\mathfrak g$ is semisimple by [F15]. Put $\mathfrak h=\mathbb CW$. It is abelian, hence nilpotent; for $X=aW+bE_++cE_-$ the brackets in [F10] give $[X,W]=-2bE_++2cE_-$, so $N_{\mathfrak g}(\mathfrak h)=\mathfrak h$ and [F14] makes $\mathfrak h$ a Cartan subalgebra. Its root spaces are $\mathbb CE_\pm$ with roots $\pm\alpha$, where $\alpha(W)=2$; by [F14] they form the reduced root system of type $A_1$. Choose $\alpha$ positive. Since $B(W,W)=8$, the Killing-dual vector is $H_\alpha=W/4$ and $\alpha(H_\alpha)=1/2$, so $\alpha^\vee=W$. The fundamental weight has $\omega(W)=1$ by [F16], hence $\alpha=2\omega$ and $\rho=\alpha/2=\omega$. The root reflection in [F14] sends $t=\lambda(W)$ to $-t$. [A1, F10, F14, F15, F16, algebra]

1.2 Let $M$ be an algebraic $(\mathfrak g,K)$-submodule and let $0\ne v=\sum_{r\in S}a_rf_r\in M$, where $S$ is its finite support and every $a_r\ne0$. If $S$ has more than one element, put $q=1+\sum_{\{r,s\}\subset S,\ r\ne s}|r-s|$; then $q>|r-s|$ for all distinct $r,s\in S$, so the eigenvalues $e^{2\pi ir/q}$ of $k_{2\pi/q}$ on these modes are distinct. Lagrange interpolation in $\Pi(k_{2\pi/q})$ extracts each $a_rf_r$ as a finite linear combination of $K$-translates of $v$, hence $f_r\in M$; for singleton support this is immediate. Thus every nonzero algebraic submodule contains a K-type. [F1, F2, algebra]

1.3 Write $g(t)=f(k_{2\pi t})$ for a smooth parity-$\varepsilon$ function. Then $g(t+\tfrac12)=(-1)^\varepsilon g(t)$, so $\widehat g(r)=0$ unless $r\equiv\varepsilon\pmod2$. By [F8], $\widehat{g^{(q)}}(r)=(2\pi ir)^q\widehat g(r)$ for every derivative order $q$, since the endpoint terms vanish by periodicity. Differentiating the finite Fourier sums in $\sigma_Ng=(N+1)^{-1}\sum_{j=0}^NS_jg$ gives $(\sigma_Ng)^{(q)}=\sigma_N(g^{(q)})$. Each $\sigma_Ng$ is a finite sum of the allowed K-types, and [F7] applied to every $g^{(q)}$ shows $\sigma_Ng\to g$ in every $C^q$ seminorm. [A1, F5, F6, F7, F8, algebra]

2.1 If $\nu\notin\mathcal W_\varepsilon$, neither coefficient in [F3] vanishes for an allowed weight $r$: either zero would force $\nu=-r-1$ or $\nu=r-1$, an integer congruent to $\varepsilon+1$ modulo $2$. Repeated raising and lowering therefore connects every allowed weight to every other. By step 1.2 every nonzero algebraic submodule contains one weight, hence all of them, proving algebraic irreducibility. [F3, step 1.2, algebra]

2.2 Let $n\in\mathcal W_\varepsilon$, $n\ge1$, and set $\nu=n$. Put $T^+=\bigoplus_{j\ge0}\mathbb C f_{n+1+2j}$, $T^-=\bigoplus_{j\ge0}\mathbb C f_{-(n+1+2j)}$, and $F=\bigoplus_{j=0}^{n-1}\mathbb C f_{n-1-2j}$. The zeros $L_{E_-}f_{n+1}=0$ and $L_{E_+}f_{-n-1}=0$ make $T^\pm$ submodules; their internal arrows are nonzero, so each is simple by the weight-extraction argument of step 1.2. In the quotient by $T^+\oplus T^-$, the finite chain $F$ has nonzero internal arrows, and the class of $f_{n-1}$ is a highest-weight vector because its $E_+$ image lies in $T^+$. Its highest weight is $(n-1)\omega$, which is dominant integral since $n\ge1$ and [F16]. The same interpolation as in step 1.2 extracts a weight from any nonzero submodule of this quotient; the internal arrows connect every weight of $F$, so $F$ is simple and [F12] identifies it with $L((n-1)\omega)=L_{n-1}$ in the notation of the Statement. By step 1.2, any submodule not contained in the two tails has a weight in $F$; its internal arrows reach all of $F$, and the arrows out of $f_{n-1}$ and $f_{1-n}$ have coefficient $n\ne0$, so it then contains both tails. Consequently $T^+\oplus T^-$ is the unique maximal proper submodule and the finite quotient is the unique irreducible quotient. The filtration $0<T^+<T^+\oplus T^-<I^K_{\varepsilon,n}$ has three nonzero simple factors, so the composition length is $3$. Here $T^+\cong M^-_{n+1}$ is the lowest-weight string and $T^-\cong M^+_{-(n+1)}$ the highest-weight string. [F3, F12, F16, step 1.1, step 1.2, algebra]

2.3 If $\varepsilon=1$ and $\nu=0$, then $L_{E_-}f_1=0$ and $L_{E_+}f_{-1}=0$. The positive odd chain $\bigoplus_{j\ge0}\mathbb C f_{1+2j}$ and negative odd chain $\bigoplus_{j\ge0}\mathbb C f_{-(1+2j)}$ are invariant; every internal arrow is nonzero, so each is simple by step 1.2. They have disjoint K-types and together contain every odd K-type, hence $I^K_{1,0}=M^-_1\oplus M^+_{-1}$. [F3, step 1.2, algebra]

3.1 Assume $\nu\notin\mathcal W_\varepsilon$ and let $W\ne\{0\}$ be a closed $G$-invariant subspace of $H$. By [F4], $W\cap I^K_{\varepsilon,\nu}$ is a nonzero algebraic $(\mathfrak g,K)$-submodule. Step 2.1 makes this intersection all of $I^K_{\varepsilon,\nu}$; its finite Fourier sums are dense in $H$ by [F2], so closedness gives $W=H$. [A1, F2, F4, step 2.1]

3.2 Assume $\nu\notin\mathcal W_\varepsilon$, and let $V\ne\{0\}$ be a closed $G$-invariant subspace of $C^\infty_\varepsilon(K)$. Take $0\ne f\in V$ and write $g(t)=f(k_{2\pi t})$. For an allowed $r$, form $P_rg(t)=\int_0^1e^{-2\pi ir\phi}g(t+\phi)\,d\phi$. Riemann sums lie in $V$ by $K$-invariance and converge in every $C^q$ seminorm: each $\partial_t^q(e^{-2\pi ir\phi}g(t+\phi))$ is uniformly continuous on the compact angle square by [F9], so the Riemann-sum error tends uniformly to zero in $t$. Periodicity and $s=t+\phi$ give $P_rg(t)=\widehat g(r)e^{2\pi irt}$, hence $P_rg=\widehat g(r)f_r\in V$. Some allowed $\widehat g(r)$ is nonzero, since otherwise every Fejér mean of $g$ would vanish and [F7] would force $g=0$. Thus $V$ contains a K-type. For each real Lie algebra element, joint smoothness of the compact-picture cocycle implies that the derived difference quotients converge together with every angular derivative, hence in $C^\infty$; closedness puts the derived vector in $V$, and complex-linear combinations give the raising and lowering operators in [F3]. Step 2.1's connected weight graph therefore puts every K-type in $V$, and step 1.3 plus closedness yields $V=C^\infty_\varepsilon(K)$. [A1, F1, F3, F5, F7, F9, step 2.1, step 1.3]

3.3 For $\nu=-n$, the same finite chain $F$ is a submodule: its outward boundary arrows vanish, and its internal arrows are nonzero. Its highest-weight vector is $f_{n-1}$, killed by $E_+$, with highest weight $(n-1)\omega$, which is dominant integral since $n\ge1$ and [F16]. By the same interpolation and internal-arrow argument as in step 2.2, it is simple, so [F12] gives $F\cong L((n-1)\omega)=L_{n-1}$. Modulo $F$, the positive and negative tails are separate submodules, because the crossing arrows land in $F$ and vanish in the quotient. Each has one-dimensional weight spaces and, by [F3], nonzero arrows in both directions between every adjacent pair of tail weights; only the inward boundary arrow vanishes in the quotient. The same interpolation as in step 1.2 extracts a weight from any nonzero submodule, and these internal raising and lowering arrows generate the whole tail, so both are simple. In either parameter, a one-sided string with fixed lowest (or highest) weight is unique up to rescaling its successive weight vectors: normalize each nonzero outward arrow to $1$, then $[E_+,E_-]=W$ recursively fixes the inward arrows from the boundary condition. Thus the quotient factors are again $M^-_{n+1}$ and $M^+_{-(n+1)}$. Any irreducible submodule not contained in $F$ has a tail weight by step 1.2; repeated nonzero inward arrows first reach a tail boundary, whose inward arrow at $\nu=-n$ is nonzero into $F$. Its intersection with the simple submodule $F$ is then all of $F$, forcing the irreducible submodule to equal $F$. Hence $F$ is the unique irreducible submodule. If $\widetilde T^+$ is the preimage of the positive quotient tail, the filtration $0<F<\widetilde T^+<I^K_{\varepsilon,-n}$ has three nonzero simple factors, so the composition length is $3$. [F3, F12, F16, step 1.1, step 1.2, step 2.2, algebra]

3.4 By step 1.1, the Killing-dual basis gives $C=\tfrac18W^2+\tfrac14(E_+E_-+E_-E_+)=\tfrac18W^2-\tfrac14W+\tfrac12E_+E_-$ using [F11]. Formula [F3] yields $L_{E_+}L_{E_-}f_r=\tfrac14\bigl(\nu^2-(r-1)^2\bigr)f_r$, and substituting $L_Wf_r=rf_r$ gives $Cf_r=\tfrac18(\nu^2-1)f_r$ for every weight. Therefore $C$ acts by this scalar on $I^K_{\varepsilon,\nu}$ and on its subquotient $L_{n-1}$ at $\nu=n$. [F3, F11, step 1.1, step 2.2, algebra]

4.1 Use the rank-one Cartan, root, coroot, positive-system and Weyl data from step 1.1. In PBW order $E_-<W<E_+$, $E_+E_-=E_-E_++W$, so the Harish-Chandra projection of the Casimir is $\operatorname{pr}(C)=W^2/8+W/4$; hence the shifted polynomial is $\operatorname{HC}_\rho(C)(t)=(t^2-1)/8$. This generates $S(\mathfrak h)^W=\mathbb C[t^2]$, so [F11] implies $Z(U(\mathfrak g))=\mathbb C[C]$. Since $C$ acts by $\lambda_\nu=(\nu^2-1)/8$, every $p(C)$ acts by $p(\lambda_\nu)$ and defines the central character of [F13]; two such characters are equal exactly when $\nu^2=(\nu')^2$, that is, when $\nu'=\pm\nu$. [A1, F11, F13, F14, step 1.1, step 3.4, algebra] ∎

## Remarks

Kerr's §2 formula (2.6), Examples 2.6–2.7 and classification paragraph (printed pp. 10–12) cross-check the ladder coefficients, the odd $\nu=0$ splitting, and the orientation of the finite and one-sided factors. Etingof's §9.1 formulas (4)–(5) and short exact sequences (printed pp. 48–49) cross-check the generic lattice and factor strings after the parameter dictionary $s=-\nu$; its basis normalization is separate, so it is not used for the local arrow coefficients. Kowalski's §7.4 Proposition 7.4.3(2) (statement printed p. 294, proof pp. 297–301) is only a unitary-character cross-check and does not establish the complex-parameter claim. All irreducibility and Casimir arguments above are proved locally.
