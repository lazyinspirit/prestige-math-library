---
id: thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module
kind: theorem
title: "The cyclotomic projective $K_0$ is the integral highest-weight module"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-axiom-of-choice,
       thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module,
       def-contravariant-form-on-an-integrable-quantum-highest-weight-module,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-graded-grothendieck-group-shift-module-and-cartan-map,
       def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules,
       def-lusztig-divided-power-integral-form,
       def-quantum-verma-module-and-simple-highest-weight-quotient,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       lem-quantum-pascal-recurrence-and-gaussian-integrality,
       def-divided-power-klr-idempotents-and-projectives,
       def-the-klr-cartan-pairing,
       lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       lem-the-vacuum-projective-is-a-highest-weight-generator,
       thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero,
       thm-integrable-quantum-highest-weight-module-exists-and-is-unique,
       thm-klr-cartan-pairing-agrees-with-lusztigs-bilinear-form,
       thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral,
       thm-klr-categorification-of-the-negative-quantum-half]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6, Theorem 6.2: the isomorphism [Proj(R^Lambda)] = V_A(Lambda) of the projective Grothendieck group with the integral highest-weight module."
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 2 for the integral form V_A(Lambda) and Section 6 for the normalized generators."
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]]. For the standard homogeneous graded quotient over any field, with arbitrary real symmetrizable Cartan datum and admissible graded KLR parameters, there is a unique $U_A$-module isomorphism $\phi:K_0(\mathrm{Proj}\,R^\Lambda)\to V_A(\Lambda)$ sending $1_\Lambda$ to $v_\Lambda$ and intertwining all normalized $E_i,F_i,K_i$ and divided powers. In particular $K_0$ is free over $A$. On the NEGATIVE half the vacuum map has exact kernel
$$\ker(U_A^-\to K_0(R^\Lambda))=\sum_{i\in I}\sum_{s>\lambda_i}U_A^-F_i^{(s)}.$$
This is the integral negative-half presentation; neither a full-$U_A$ quotient by only $F_i^{(\lambda_i+1)}$ nor invertibility of divided-power factorials is asserted.
For projectives, the tensor form $T(P,Q)=\mathrm{gdim}(P^\psi\otimes Q)$ transports to the highest-weight contravariant form normalized by $(v_\Lambda,v_\Lambda)=1$ and $\sigma(F_i)=q_i^{-1}K_iE_i$, $\sigma(E_i)=q_iF_iK_i^{-1}$, $\sigma(K_i)=K_i$. It is not the generic negative-half Lusztig form with a newly alleged radical.


## Facts & Assumptions

**Given:** The standard homogeneous cyclotomic quotient over an arbitrary degree-zero field, the real symmetrizable Cartan datum, admissible graded parameters, $A=\mathbb Z[q,q^{-1}]$, and the normalized projective operators. Write $\lambda_i=\langle h_i,\Lambda\rangle$.

[F1] The vacuum is nonzero, of weight $\Lambda$, and killed by all $E_i$. Divided words generate its projective $K_0$ over $A$, by extension of generic normalized covers and the actual divided-power idempotents; ordinary-word retracts alone do not prove integral generation ([[lem-the-vacuum-projective-is-a-highest-weight-generator]]).

[F2] The normalized operators satisfy the full mixed and Serre relations and are locally nilpotent, for every stated field and graded parameter datum. The basic corner tensor identities and $A$-bilinear pairing are proved in [[thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero]].

[F3] The standard pure-$i$ quotient imposes $x_1^{\lambda_i}=0$. Its divided-power idempotent is $x_1^{s-1}x_2^{s-2}\cdots x_{s-1}\partial_{w_0}$ and its generator-fixing anti-involution image, as supplied by [[def-divided-power-klr-idempotents-and-projectives]]. The actual integral projection has kernel $\sum_i\sum_{s>\lambda_i}U_A^-F_i^{(s)}$, and $V_A(\Lambda)$ is its lattice in $V(\Lambda)$ ([[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]], [[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]]). Every nonzero integrable cyclic highest-weight module over $\mathbb Q(q)$ is the simple $V(\Lambda)$ ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]).

[F4] Projective Hom duality and finite simple duality are distinct. Normalized cover/simple classes give free shift-orbit bases, and the generator-fixing anti-involution flips tensor factors ([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]], [[def-the-klr-cartan-pairing]]). The normalized highest-weight contravariant form is unique, for the linear anti-involution $\sigma(F_i)=q_i^{-1}K_iE_i$, $\sigma(E_i)=q_iF_iK_i^{-1}$, $\sigma(K_h)=K_h$ ([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]]).

[F5] For nonnegative upper index the Gaussian binomials are Laurent polynomials in $q_i$ with integer coefficients ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]], part (iv)).

## Proof

**Proof technique:** factor the divided vacuum map through the exact integral highest-weight presentation, prove it is an isomorphism by rational simplicity and the torsion-free source lattice, and identify the tensor form by its actual corner adjunction and normalization.

**Given:** The data of F1–F4, with AC inherited through the declared generic and quantum highest-weight suppliers.

1.1 By F1 the map $U_A^-\to K_0(R^\Lambda)$, $u\mapsto u1_\Lambda$, is surjective. For every $s>\lambda_i$, the staircase idempotent in F3 is divisible on the left by $x_1^{\lambda_i}$, since $s-1\ge\lambda_i$, and therefore is zero in the standard quotient. The generator-fixing anti-involution preserves its cyclotomic ideal, so the dual projector defining the divided-power projective is zero as well. Hence $F_i^{(s)}1_\Lambda=0$ without dividing by a quantum factorial. All translates $U_A^-F_i^{(s)}$ therefore lie in its kernel. The exact integral projection presentation in F3 gives a well-defined surjective $A$-linear map $f:V_A(\Lambda)\to K_0(R^\Lambda)$ sending $v_\Lambda$ to $1_\Lambda$ and every divided word to the corresponding divided-functor class. [F1, F3, construct, algebra]

1.2 The anti-involution identifies $P^\psi\otimes Q$ with $Q^\psi\otimes P$ by interchanging the factors, so the projective tensor form $T$ is symmetric and $A$-bilinear. Different root blocks pair by zero. The basic corner identities of F2 give $T(F_iP,Q)=T(P,E_i^{\rm basic}Q)$ and $T(E_i^{\rm basic}P,Q)=T(P,F_iQ)$. At input $\beta+\alpha_i$ and output $\beta$, put $h=\langle h_i,\Lambda-\beta\rangle$. Projective $E_i=q_i^{1-h}E_i^{\rm basic}$ and $q_i^{-1}K_iE_i=q_i^{h-1}E_i=E_i^{\rm basic}$ on this target. Thus the first identity is $T(F_iP,Q)=T(P,\sigma(F_i)Q)$. [F2, F4, algebra]


1.3 The integral positive operators are defined as well. On $n$-fold basic restriction the last $n$ equal-color dots and crossings give a nil-Hecke action commuting with the target algebra. Its graded matrix-column decomposition in F3 expresses this restriction as $[n]_i!$ shifted copies of an idempotent summand, with the symmetric centering of the polynomial column. Restriction preserves finite projectives by F2, so this summand is finite projective. Multiplying it by the integral grading shift from the $n$ successive $E_i$ normalizations realizes the rational operator $E_i^n/[n]_i!$ on $K_0$; thus it preserves $K_0$ without inverting the factorial in $A$. Negative divided powers are realized by the analogous induction idempotents of F3. A toral binomial acts on an integral weight by $\prod_{s=1}^t[m+c-s+1]_i/[s]_i$. For $m+c\ge0$ this is the integral Gaussian binomial (or zero), and for $m+c<0$ it is $(-1)^t\binom{-(m+c)+t-1}{t}_i$, again integral by [[lem-quantum-pascal-recurrence-and-gaussian-integrality]]. Hence the full $U_A$ acts on $K_0$; its relations follow from the rational action because the cover basis in F4 makes $K_0$ torsion-free. [F2, F3, F4, F5, algebra]


2.1 The quotient-cover bases in F4 make $K_0$ free over $A$; in particular its nonzero vacuum stays nonzero after tensoring with $\mathbb Q(q)$. By F2 the rationalized target is an integrable cyclic highest-weight module of weight $\Lambda$. The universality and ordinary simplicity in F3 identify it with $V(\Lambda)$ by the unique map preserving the highest vector. This map is the rationalization of $f$, since both agree on every divided word. Thus $f$ becomes an isomorphism after localization. [F2, F3, F4, step 1.1, algebra]

3.1 An element $z\in\ker f$ maps to zero on localization, so some nonzero $a\in A$ kills $z$. The source $V_A(\Lambda)$ is an actual submodule of the vector space $V(\Lambda)$ over the fraction field, by F3, and is consequently torsion-free. Hence $z=0$, proving $f$ injective. Its inverse $\phi$ is the required integral isomorphism; the original vacuum map has exactly the integral projection kernel in the Statement. The rational isomorphism intertwines all normalized positive, negative and toral operators. Each difference of their integral operator maps has zero localization, and the target $K_0$ is torsion-free by F4, so the equality holds integrally, including the actual divided powers. Uniqueness follows from divided-word generation. [F1, F3, F4, step 2.1, algebra]

4.1 For the second identity, take $P$ at root $\beta+\alpha_i$ and $Q$ at root $\beta$. Its normalization yields $T(E_iP,Q)=q_i^{1-h}T(P,F_iQ)$. On $Q$, $q_iF_iK_i^{-1}=q_i^{1-h}F_i$, so this is $T(E_iP,Q)=T(P,\sigma(E_i)Q)$. The torus is scalar on each root component and preserves its label, giving toral contravariance. The vacuum tensor product is $k$, of norm one. Transported by $\phi$, these identities and symmetry give exactly the normalized highest-weight contravariant form; uniqueness in F4 identifies it. This uses the highest-weight form, rather than the generic negative-half form or a supposed new radical of that form. [F2, F4, step 3.1, step 1.2, algebra]

5.1 Steps 1.1, 2.1 and 3.1 prove the unique integral highest-weight isomorphism and its exact divided right-power kernel in the full stated general-field/general-Cartan scope. Steps 1.2 and 4.1 prove the tensor-form assertion. Projective-cover shift orbits give the independent free $A$-basis, without treating all divided words as a basis or making a quantum factorial invertible. AC is inherited only through the declared generic categorification and quantum highest-weight suppliers; the localization, torsion-free kernel and finite corner computations introduce no further choice. [step 3.1, step 4.1, F4] ∎