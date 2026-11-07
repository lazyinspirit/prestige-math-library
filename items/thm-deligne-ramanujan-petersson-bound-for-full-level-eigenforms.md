---
id: thm-deligne-ramanujan-petersson-bound-for-full-level-eigenforms
kind: theorem
title: "Deligne–Ramanujan–Petersson Bound for Full-Level Eigenforms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-normalized-full-level-holomorphic-hecke-eigenform
  - lem-symmetric-powers-preserve-frobenius-weights-for-rank-two-lisse-sheaves
  - thm-hecke-adjoint-and-commuting-relations-congruence-forms
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-continuous-l-adic-galois-representation
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-pointwise-purity-and-weights-of-an-l-adic-sheaf
  - def-frobenius-trace-on-a-constructible-stalk
  - thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves
  - def-compactly-supported-etale-cohomology
  - thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial
  - def-arithmetic-frobenius-coset
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - thm-delignes-galois-representation-has-eigenform-frobenius-polynomial
  - thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group
  - thm-local-absolute-galois-group-residue-exact-sequence
  - def-modular-curve-parabolic-etale-cohomology-for-eigenforms
  - thm-modular-curve-cohomology-realizes-cuspidal-eigensystems
  - thm-deligne-weight-bound-for-compactly-supported-cohomology
  - thm-full-level-eigenform-coefficients-are-in-a-number-field
  - thm-universal-elliptic-curve-r1-is-lisse-and-pointwise-pure-of-weight-one
  - lem-elliptic-relative-r1-lisse-and-pure
  - lem-scalar-extension-of-lisse-adic-sheaves-preserves-frobenius-eigenvalues
  - thm-fine-modular-integral-compactification-at-each-prime
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - thm-fundamental-theorem-of-arithmetic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§4.8–4.9 and §5, especially Theorems 5.1 and 5.6, printed pp. 17–20: the Frobenius polynomial and derivation of Ramanujan from the Weil conjectures."
    - title: "Fred Diamond and John Im, Modular Forms and Modular Curves"
      url: "https://wstein.org/msri06/stein/Diamond-Im-Modular_forms_and_modular_curves.pdf"
      locator: "Chapter 12 §12.5.1, printed pp. 120–123: arithmetic Frobenius convention, attached-representation polynomial, and Remark 12.5.10 on the Ramanujan–Petersson bound."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Corollary 5.6 and the recurrence/Euler-factor discussion, printed pp. 68–70; Propositions 5.16–5.18 and Corollary 5.20, pp. 73–75."
    - title: "Kiran S. Kedlaya, Weil Cohomology in Practice"
      url: "https://kskedlaya.org/weil-cohom/chapter-16.html"
      locator: "Theorem 16.1.14 and Remark 16.1.15: the smooth-curve compactly supported cohomology weight bound."
    - title: "Pierre Deligne, La conjecture de Weil: II"
      url: "https://www.numdam.org/item/PMIHES_1980__52__137_0.pdf"
      locator: "Theorem 3.3.1: the compactly supported cohomology weight theorem cited by the local weight supplier."
---

## Statement

Assume the Axiom of Choice, the Axiom of Dependent Choice, and Countable Choice. Let $k\ge2$ be even, and let $f(z)=\sum_{n\ge1}a_f(n)q^n\in S_k(SL_2(\mathbb Z))$ be a normalized simultaneous eigenform for the standard normalized full-level Hecke operators, so that $a_f(1)=1$ and $T_n f=a_f(n)f$ for every integer $n\ge1$. Define

$$\lambda_f(n):=a_f(n)n^{-(k-1)/2},\qquad d(n):=\#\{m\in\mathbb Z_{>0}:m\mid n\}.$$

Then $|\lambda_f(n)|\le d(n)$ for every integer $n\ge1$.

## Statement references

[[def-normalized-full-level-holomorphic-hecke-eigenform]]

[[thm-hecke-adjoint-and-commuting-relations-congruence-forms]]

[[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]

[[thm-deligne-weight-bound-for-compactly-supported-cohomology]]

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§4.8–4.9 and §5](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Diamond–Im, *Modular Forms and Modular Curves*, Chapter 12 §12.5.1](https://wstein.org/msri06/stein/Diamond-Im-Modular_forms_and_modular_curves.pdf)

[Milne, *Modular Functions and Modular Forms*, Chapter 5](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Kedlaya, *Weil Cohomology in Practice*, Chapter 16](https://kskedlaya.org/weil-cohom/chapter-16.html)

## Facts & Assumptions

**Given:** AC, DC, and Countable Choice; an even integer $k\ge2$; and a normalized full-level holomorphic Hecke eigenform $f$ with the notation in the Statement.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets has a choice function. It is assumed by the global Galois-group and coefficient-embedding conventions used by the representation supplier.

[A2] [[def-dependent-choice]]: DC states that every nonempty set with an everywhere-extendible relation admits an $\mathbb N$-indexed chain from any prescribed starting point. It is retained in the current local-Galois dependency closure; no separate DC use is established in the current unramified-Frobenius proof.

[A3] [[def-countable-choice]]: Countable Choice supplies a choice function for every countable family of nonempty sets. It is retained by the current local completion and absolute-Galois-group suppliers.

[F1] [[def-normalized-full-level-holomorphic-hecke-eigenform]]: $f\in S_k(SL_2(\mathbb Z))$, $a_f(1)=1$, and $T_n f=a_f(n)f$ for every $n\ge1$.

[F2] [[thm-hecke-adjoint-and-commuting-relations-congruence-forms]]: on $S_k(\Gamma_0(N),\chi)$ the Hecke operators satisfy $T_mT_n=\sum_{d\mid\gcd(m,n)}\chi(d)d^{k-1}T_{mn/d^2}$. At $N=1$ and trivial character this gives coprime multiplicativity and the prime-power recurrence.

[F3] [[def-modular-curve-parabolic-etale-cohomology-for-eigenforms]]: for the fixed compactification, $H^1_{\rm par}$ is the image of the forget-support map $H_c^1\to H^1$.

[F4] [[thm-modular-curve-cohomology-realizes-cuspidal-eigensystems]]: its current Statement places a two-dimensional, Galois-stable simultaneous Hecke eigenspace $W_{f,\ell}$ in the parabolic cohomology direct system for the symmetric-power local system.

[F5] [[thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform]]: the attached representation is the contragredient of the two-dimensional cohomological eigenspace, with that cohomological action normalized as geometric Frobenius.

[F6] [[thm-delignes-galois-representation-has-eigenform-frobenius-polynomial]]: for $p\nmid N\ell$, the arithmetic Frobenius polynomial is $X^2-\iota_\ell(a_f(p))X+\iota_\ell(\chi(p))p^{k-1}$; here $N=1$ and $\chi=1$.

[F7] [[def-arithmetic-frobenius-coset]]: geometric Frobenius is the inverse of the residue-field arithmetic Frobenius $x\mapsto x^p$.

[F8] [[def-compactly-supported-etale-cohomology]]: $H_c^i(X,-)$ is the $i$th cohomology of the derived direct image with proper supports for a separated finite-type scheme over a field.

[F9] [[def-pointwise-purity-and-weights-of-an-l-adic-sheaf]]: at a closed point $x$ of degree $d$, pointwise purity of weight $w$ means every geometric-Frobenius eigenvalue on the stalk has absolute value $q^{dw/2}$ under the fixed coefficient embedding.

[F10] [[thm-deligne-weight-bound-for-compactly-supported-cohomology]]: for a constructible $\overline{\mathbb Q}_\ell$-sheaf pointwise mixed of weights at most $w$ on a separated finite-type scheme over $\mathbb F_q$, each geometric-Frobenius eigenvalue on $H_c^i$ has absolute value at most $q^{(w+i)/2}$.

[F11] [[lem-symmetric-powers-preserve-frobenius-weights-for-rank-two-lisse-sheaves]]: if the rank-two local system has geometric-Frobenius eigenvalues of absolute value $q^{d/2}$ at each degree-$d$ closed point, its $(k-2)$nd symmetric power has eigenvalues of absolute value $q^{d(k-2)/2}$.

[F12] [[def-frobenius-trace-on-a-constructible-stalk]]: at a finite-field point, the stalk trace uses geometric Frobenius, inverse arithmetic Frobenius.

[F13] [[thm-grothendieck-lefschetz-trace-formula-for-constructible-l-adic-sheaves]]: the sum of geometric-Frobenius stalk traces over finite-field points equals the alternating sum of geometric-Frobenius traces on compactly supported cohomology.

[F14] [[thm-fundamental-theorem-of-arithmetic]]: every positive integer has a prime factorization, unique up to order.

[F15] [[def-lisse-l-adic-sheaf-on-a-scheme]]: lissity means being represented by compatible finite locally constant free systems of finite rank.

[F16] [[thm-unramified-galois-representation-has-well-defined-frobenius-characteristic-polynomial]]: for an unramified representation, the arithmetic-Frobenius characteristic polynomial is independent of the lift and of the chosen place, using the now-supplied local decomposition and residue proofs under the stated axioms.

[F17] [[def-constructible-l-adic-sheaf-on-a-scheme]]: constructible rational adic sheaves are represented by strict constructible systems for one common finite locally closed stratification; a lisse system is locally constant at every finite level.

[F18] Every normalized full-level eigenform has all its coefficients in one number field. [[thm-full-level-eigenform-coefficients-are-in-a-number-field]]

[F19] Under AC, the actual finite-level relative elliptic R¹ system is lisse of rank two and has geometric-Frobenius weight one at finite-field points; the universal-model corollary assumes a supplied elliptic model. [[lem-elliptic-relative-r1-lisse-and-pure]] [[thm-universal-elliptic-curve-r1-is-lisse-and-pointwise-pure-of-weight-one]]

[F20] Scalar extension of a lisse Qℓ system to the finite-model Q̄ℓ category preserves the stalk Frobenius eigenvalues and pointwise weights. [[lem-scalar-extension-of-lisse-adic-sheaves-preserves-frobenius-eigenvalues]]

[F21] At each prime p there is a prime-to-p fine full-level 3 or 4 open elliptic model with a smooth proper integral compactification; it does not supply compatibility with the eigenspace in [F4]. [[thm-fine-modular-integral-compactification-at-each-prime]]

[L1] [[thm-modular-curve-cohomology-realizes-cuspidal-eigensystems]]: the cohomological Statement requires a number field $E$ and a compatible $\ell$-adic embedding. Its proof is `not-supplied` and lists missing modular-curve good-reduction, parabolic finiteness/continuity, all-weight Shimura comparison, and direct-system compatibility suppliers.

[L2] [[thm-decomposition-group-at-a-global-place-is-the-local-absolute-galois-group]]: its current draft Statement identifies the decomposition subgroup at a finite global place with the local absolute Galois group. It is listed in batch 68's `local-galois-groups-and-continuous-cohomology` A-page manifest at item level 6. Its Step-1 record is `ready`, `owner: true`, based on focused owner acceptance; that record gives no native independent-review or pipeline-gate credit.

[L3] [[thm-local-absolute-galois-group-residue-exact-sequence]]: the existing theorem now belongs to batch68 and has an explicit finite-unramified lifting and compactness proof. This author reconstruction is pending focused independent review; no owner readiness or native gate credit is inferred here.

[L4] [[thm-deligne-weight-bound-for-compactly-supported-cohomology]]: its current Statement requires a constructible $\overline{\mathbb Q}_\ell$-sheaf genuinely mixed by a finite filtration of pure quotients; its proof remains `not-supplied`. The local elliptic weight and scalar-extension inputs are supplied by [F19]–[F21] at their stated scopes, but identification of the eigenspace with the chosen model and its reduction remains part of [L1]. No complete Weil II proof or cohomological comparison is inferred.

[L5] [[def-normalized-cuspidal-eigenform-over-gl2]]: the current Definition requires coefficients in a specified number field $E$, a fixed complex embedding, normalization $a_1=1$, and simultaneous eigenform equations. Its Step-1 record is escalated on a claimed Hecke-preservation orientation defect; the current batch-6 focused clarification says that reported defect was disproved and its preservation/adjoint inputs now have hash-current ready records, but this GL2 Definition record has not been reconciled.

## Proof

**Proof technique:** The cohomological derivation below is conditional on [L1]–[L4]. The exact unresolved inputs and their affected claims are retained; no proof completion is inferred from a source statement.

1.1 Fix a prime $p$. For this fixed prime choose the auxiliary prime $\ell=2$ if $p\ne2$, and $\ell=3$ if $p=2$. To apply the attached-representation interface to the arbitrary complex form $f$, the number-field coefficient result is supplied by [F18]. With a number field $E$ containing those coefficients and the matching complex embedding, the full-level form is an instance of the normalized cuspidal eigenform Definition [L5] with trivial character; the unresolved readiness reconciliation for [L5] remains explicit. The following representation argument is therefore conditional on these inputs and a compatible $\ell$-adic embedding. [given, A1, F1, F18, L1, L5, choose]

1.2 In the full-level trivial-character case, [F2] gives $a_f(mn)=a_f(m)a_f(n)$ when $\gcd(m,n)=1$ and $a_f(p)a_f(p^j)=a_f(p^{j+1})+p^{k-1}a_f(p^{j-1})$ for every prime $p$ and $j\ge1$, by applying its operator identities to the simultaneous eigenform [F1]. Dividing by the corresponding powers of $p^{(k-1)/2}$ yields multiplicativity of $\lambda_f$ on coprime inputs and $\lambda_f(p^{j+1})=\lambda_f(p)\lambda_f(p^j)-\lambda_f(p^{j-1})$. [F1, F2, algebra]

2.1 Conditional on [L1] and [L5], the modular-curve and representation Statements [F4] and [F5] identify the attached representation at $p$ with the cohomological two-dimensional eigenspace under the geometric/arithmetic Frobenius conversion of [F7]. The well-defined arithmetic polynomial convention is [F16]. The polynomial supplier [F6] then gives roots $\alpha_p,\beta_p$ with $\alpha_p+\beta_p=\iota_\ell(a_f(p))$ and $\alpha_p\beta_p=p^{k-1}$. The decomposition/local-residue bridges [L2] and [L3] are now supplied on batch68; the latter reconstruction is pending focused independent review. The attached modular-cohomological representation and Eichler–Shimura congruence inputs for [F6] remain held; supplying the local bridges does not complete that theorem. The supplier closure retains the axioms [A1]–[A3]. [A1, A2, A3, F4, F5, F6, F7, F16, L1, L2, L3, L5, step 1.1, algebra]

3.1 The local system in [F4] is $\mathcal V=\operatorname{Sym}^{k-2}R^1\pi_*\mathbb Q_\ell$. By [F3], $W_{f,\ell}$ lies in the image of $H_c^1\to H^1$, hence is a stable subquotient of $H_c^1$ once the good-reduction and comparison inputs in [L1] are supplied. At the given prime p, [F21] supplies a fine prime-to-p elliptic model, and [F19] proves the actual finite-level $R^1\pi_*\mathbb Q_\ell$ system is lisse and pointwise pure of weight one on an appropriate finite-field fibre. The missing comparison in [L1] must still identify the cohomological eigenspace and its specialization with the chosen model. Subject to that identification, [F11] makes $\mathcal V$ pointwise pure of weight $k-2$, and [F20] supplies scalar extension preserving its Frobenius eigenvalues. The lisse system is constructible by [F17] and has a one-step pure filtration. The weight theorem [F10] still needs the complete proof recorded in [L4]. Conditional on that theorem and [L1], [F10] with $i=1$ bounds every geometric-Frobenius eigenvalue on $H_c^1$ by $p^{(k-1)/2}$, and therefore gives $|\alpha_p|,|\beta_p|\le p^{(k-1)/2}$ on its stable subquotient $W_{f,\ell}$. The trace function and trace formula [F12]–[F13] use the same geometric-Frobenius convention. [F3, F4, F8, F9, F10, F11, F12, F13, F15, F17, F19, F20, F21, L1, L4, step 2.1, given, algebra]

4.1 Since $|\alpha_p\beta_p|=p^{k-1}$ and each factor has absolute value at most $p^{(k-1)/2}$, both have absolute value exactly $p^{(k-1)/2}$. The triangle inequality and step 2.1 give $|a_f(p)|\le2p^{(k-1)/2}$, equivalently $|\lambda_f(p)|\le2$. [F6, step 2.1, step 3.1, algebra]

5.1 Put $s=(k-1)/2$ and $u=\alpha_p/p^s$, $v=\beta_p/p^s$. By step 4.1, $|u|=|v|=1$, $uv=1$, and $\lambda_f(p)=u+v$. The sequence $S_j=\sum_{t=0}^j u^t v^{j-t}$ has $S_0=1$, $S_1=u+v$, and $(u+v)S_j=S_{j+1}+S_{j-1}$ because $uv=1$. Induction using the recurrence in step 1.2 gives $\lambda_f(p^j)=S_j$ for all $j\ge0$, whence $|\lambda_f(p^j)|\le j+1$. [step 4.1, step 1.2, induction, algebra]

6.1 Write $n=\prod_p p^{e_p}$ by [F14]. Coprime multiplicativity from step 1.2 and the prime-power bounds from step 5.1 give $|\lambda_f(n)|\le\prod_p(e_p+1)$. Every positive divisor of $n$ is obtained uniquely by choosing an exponent from $0$ through $e_p$ for each prime divisor $p$, so $d(n)=\prod_p(e_p+1)$ and the asserted bound follows. For $n=1$ both products are empty and $|\lambda_f(1)|=d(1)=1$. [F1, F14, step 1.2, step 5.1, algebra] ∎

## Remarks

The trace convention used here is supplied by the constructible-stalk definition [F12]. The Grothendieck–Lefschetz statement is present only with `proof: not-supplied`. The other unresolved inputs are recorded in [L1]–[L5]; this dependency cleanup does not resolve them or assert readiness.
