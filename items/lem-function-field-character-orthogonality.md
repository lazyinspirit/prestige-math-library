---
dependency_level: 1
id: lem-function-field-character-orthogonality
kind: lemma
title: "Function-Field Haar Probability and Character Orthogonality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-function-field-additive-character
  - lem-trace-pairing-for-a-finite-separable-extension
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - def-countable-choice
  - def-canonical-base-b-expansion-and-normality
  - thm-dynkin-pi-lambda
  - thm-continuity-from-below-for-measures
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-lebesgue-measure-of-a-box-of-every-kind
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. D. Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "§17, (17.1), finite orthogonality and the normalized measure convention; the local digit construction discharges that convention"
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§11.2, canonical base-b digit convention, used in the explicit pushforward construction"
---

## Statement

Let $\mathcal O=\mathbb F_q[t]$, $\mathbb T=\{\sum_{n\ge1}a_nt^{-n}:a_n\in\mathbb F_q\}$, and use the Laurent-series character $e_\infty$. The formulas for the field, Laurent series and character are choice-free. The group $\mathbb T$ and all its finite powers are compact Hausdorff in the coefficient topology.

Assuming the Axiom of Countable Choice $\mathrm{AC}_\omega$, there is a unique normalized Radon Haar probability $\mu_r$ on each $\mathbb T^r$, $r\ge1$. If a cylinder specifies the first $n_j$ Laurent coefficients in coordinate $j$, its measure is $q^{-\sum_jn_j}$, including measure one for the empty specification. Moreover $\mu_r=\mu_1^{\otimes r}$: on every Borel rectangle $A_1\times\cdots\times A_r$ its value is $\prod_j\mu_1(A_j)$. These measures are obtained by a canonical base-$q$ digit pushforward of the given Lebesgue probability on $[0,1)^r$. Countable Choice is used in the local Lebesgue-box supplier and in summable open approximation for Radon regularity; full AC is not assumed.

For any given normalized translation-invariant Borel probability $\mu$ on $\mathbb T$, with no additional choice premise needed for the following implication, every $h\in\mathcal O$ satisfies

$$\int_{\mathbb T}e_\infty(\alpha h)\,d\mu(\alpha)=\begin{cases}1,&h=0,\\0,&h\ne0.\end{cases}$$

Independently of any measure existence or choice assumption, for every monic polynomial $f\in\mathcal O$ of positive degree and every $h\in\mathcal O$,

$$|f|^{-1}\sum_{u\bmod f}e_\infty(uh/f)=\begin{cases}1,&f\mid h,\\0,&f\nmid h.\end{cases}$$

The pairing $(u,h)\mapsto e_\infty(uh/f)$ on $\mathcal O/(f)$ is nondegenerate. The scalar identities multiply coordinatewise; for continuous integrals one uses the indicated finite product measure, and for finite averages no measure construction is involved. In particular, finite orthogonality applies to $f=\pi^B$ for every monic irreducible $\pi$ and integer $B\ge1$, in every characteristic.

## Statement references

[[def-function-field-additive-character]]

[[def-countable-choice]]

[Wooley, §17](https://arxiv.org/pdf/1708.01220v2)

## Facts & Assumptions

**Given:** A finite field $\mathbb F_q$ of characteristic $p$, the coefficient topology, a polynomial $h$, and, in the finite formula, a monic $f$ of degree $M\ge1$. Countable Choice is assumed only in the probability construction and regularity clauses; the finite-character proof is independent of that assumption.

[F1] The Laurent-series and character formulas, coefficient topology and polynomial residue representatives are those of the defining item; its measure convention is what this lemma constructs ([[def-function-field-additive-character]]). The exponential has the addition law, modulus one on the imaginary axis and kernel $2\pi i\mathbb Z$ ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-kernel-and-fibres-of-complex-exponential]]).

[F2] A finite field is perfect, so $\mathbb F_q/\mathbb F_p$ is separable and its trace pairing is nondegenerate. Every $a\ne0$ therefore has a $c$ with $\operatorname{Tr}(ca)\ne0$ ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[lem-trace-pairing-for-a-finite-separable-extension]]).

[F3] Canonical base-$q$ digits satisfy the floor recurrence, use terminating expansions at $q$-adic endpoints, and represent every $x\in[0,1)$ ([[def-canonical-base-b-expansion-and-normality]]).

[F4] A lambda-system containing a pi-system contains its generated sigma-algebra ([[thm-dynkin-pi-lambda]]).

[F5] Under Countable Choice, the given Lebesgue measure assigns a half-open finite-dimensional box the product of its side lengths, in particular mass one to $[0,1)^r$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F6] Finite measures are continuous on increasing unions and countably subadditive ([[thm-continuity-from-below-for-measures]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[A1] Countable Choice selects one summably accurate open approximation for each member of a prescribed countable family of Borel sets. It is also the explicit premise of [F5] ([[def-countable-choice]]).

## Proof

1.1 The character is independent of the integer lift because changing a lift by a multiple of $p$ multiplies the exponential by one. Extraction of a Laurent coefficient and trace are additive, so $e_\infty$ is additive, has modulus one and is one on $\mathcal O$. If $h\ne0$ has degree $\ell$ and leading coefficient $a$, take $c$ from [F2] and put $\beta=ct^{-\ell-1}\in\mathbb T$. The coefficient of $t^{-1}$ in $\beta h$ is $ca$, so $e_\infty(\beta h)\ne1$. This construction is finite and uses no choice axiom. [given, F1, F2, choose, algebra]

1.2 Fix a bijection $b:\{0,\ldots,q-1\}\to\mathbb F_q$; selecting one ordering of a single finite set requires only finite choice. A Laurent series in $\mathbb T^r$ is a sequence over the finite alphabet $\mathbb F_q^r$, with initial-word cylinders as a countable clopen base. Distinct sequences are separated by disjoint cylinders. To prove compactness directly, suppose an open cover has no finite subcover. Call a finite word bad when its cylinder has no finite subcover. A bad word has a bad child, since there are only finitely many children. Starting with the empty word, recursively take the least bad child in the fixed finite ordering. This uniquely specified recursion uses no dependent choice. The resulting sequence lies in a cover member containing one of its prefix cylinders, contradicting badness of that prefix. Thus $\mathbb T^r$ is compact Hausdorff. The coordinatewise group operations are continuous because every finite output prefix depends only on the corresponding finite input prefixes. [given, F1, construct, algebra]

2.1 Assume [A1]. Write $d_n(x)$ for the digits in [F3] and define $D(x)=\sum_{n\ge1}b(d_n(x))t^{-n}$ as a formal Laurent series. The recurrence gives $\lfloor q^nx\rfloor=\sum_{j=1}^nd_j(x)q^{n-j}$. Hence the preimage of the cylinder with digit word $(a_1,\ldots,a_n)$ is exactly $[m/q^n,(m+1)/q^n)$, where $m=\sum_{j=1}^nb^{-1}(a_j)q^{n-j}$. This includes endpoints under the terminating convention; no exceptional null set is discarded. Each open set is the union of the members of the specified countable cylinder base that it contains. Therefore $D$ is Borel measurable. Coordinatewise, $D_r:[0,1)^r\to\mathbb T^r$ is measurable and the preimage of a cylinder fixing $n_j$ coefficients in coordinate $j$ is a half-open box of volume $q^{-\sum n_j}$. Set $\mu_r(E)=\lambda_r(D_r^{-1}E)$ for every Borel $E$. Preimages preserve disjoint countable unions, so this is a countably additive probability, and [F5] gives its asserted cylinder law. Surjectivity of the digit map is not needed. [A1, F3, F5, step 1.2, construct, algebra]

2.2 Now let $\mu$ be any given normalized invariant Borel probability on $\mathbb T$; this conditional calculation does not need the construction or Countable Choice. For nonzero $h$, the integrand $e_\infty(\alpha h)$ is bounded and continuous, since it depends on finitely many negative coefficients. Translation by $\beta$ from step 1.1 gives $I=\int e_\infty(\alpha h)\,d\mu=e_\infty(\beta h)I$, so $I=0$. If $h=0$, its integral is the total mass, one. [F1, step 1.1, algebra]

2.3 For the choice-free finite formula, divide $h=af+r_0$ with $r_0=0$ or $\deg r_0<M$. The character of $uh/f$ depends only on the residue classes, since it is one on polynomials. There are $q^M$ classes, one for each list of $M$ coefficients. If $r_0=0$, every summand is one. Otherwise let $R_0=\deg r_0$ and let $a_0\ne0$ be its leading coefficient. Choose $c_0$ with $\operatorname{Tr}(c_0a_0)\ne0$ by [F2], and put $v=c_0t^{M-R_0-1}$. Since $f$ is monic, the Laurent expansion of $vr_0/f$ has leading term $c_0a_0t^{-1}$. Thus $e_\infty(vh/f)\ne1$. Translation by $v$ permutes the residue classes, so the finite sum $S$ satisfies $S=e_\infty(vh/f)S$ and is zero. This proves finite orthogonality and separates every nonzero class in either factor, proving nondegeneracy. [given, F1, F2, step 1.1, choose, algebra]

3.1 Translation by any fixed Laurent-series vector permutes the assignments of every finite coefficient cylinder. Thus $E\mapsto\mu_r(E+a)$ is a Borel probability agreeing with $\mu_r$ on cylinders. Their equality class is a lambda-system; the cylinders, together with the empty set, form a pi-system generating the Borel sigma-algebra by the countable-base description. By [F4], the probabilities agree on all Borel sets. Hence $\mu_r$ is translation invariant. Conversely, any invariant Borel probability must assign equal mass to the $q^{rn}$ cylinders fixing the first $n$ coefficients in every coordinate, because translations act transitively on them. Their disjoint union is the whole group, so each has mass $q^{-rn}$. The same pi-lambda argument proves uniqueness on all Borel sets. [F4, step 1.2, step 2.1, algebra]

3.2 To check the product assertion on all Borel rectangles, first take cylinder sets in every coordinate. The formula in step 2.1 is the product of the one-coordinate cylinder masses. Fix cylinders in all but the first coordinate; the Borel sets in the first coordinate for which this equality holds form a lambda-system containing its cylinder pi-system, because both sides are finite measures with equal total mass. Apply [F4]. Then fix that arbitrary first-coordinate Borel set and cylinders in all but the second coordinate, and repeat. A finite induction gives the rectangle formula for all Borel $A_1,\ldots,A_r$. Thus the already constructed $\mu_r$ supplies the finite product probability without invoking an infinite-product measure theorem. [F4, step 2.1, algebra]

3.3 For each $r$, every open $U\subseteq\mathbb T^r$ is the increasing union of finite unions of its enumerated clopen cylinders. Each such union is compact. By [F6], $\mu_r(U)$ is the supremum of their masses. Let $\mathcal R$ be the Borel sets $E$ such that, for every $\eta>0$, there are compact $K\subseteq E\subseteq V$ with $V$ open and $\mu_r(V\setminus K)<\eta$. The preceding compact approximation puts every open set in $\mathcal R$. Since the whole space is compact, taking complements exchanges $K\subseteq E\subseteq V$ with the compact/open sandwich $\mathbb T^r\setminus V\subseteq E^c\subseteq\mathbb T^r\setminus K$, preserving the error. Thus $\mathcal R$ is closed under complements. [F6, step 1.2, step 2.1, algebra]

4.1 Suppose $E_j\in\mathcal R$ for $j\ge1$ and write $E=\bigcup_jE_j$. By [A1], choose open $V_j\supseteq E_j$ with $\mu_r(V_j\setminus E_j)<\eta2^{-j-2}$ simultaneously. Then $V=\bigcup_jV_j$ has $\mu_r(V\setminus E)<\eta/4$ by [F6]. Continuity from below chooses a finite $m$ with $\mu_r(E\setminus\bigcup_{j\le m}E_j)<\eta/4$. Finite choice gives compact $K_j\subseteq E_j$ for $j\le m$ with $\mu_r(E_j\setminus K_j)<\eta/(4m)$. The compact union $K=\bigcup_{j\le m}K_j$ lies in $E$ and satisfies $\mu_r(E\setminus K)<\eta/2$, so $\mu_r(V\setminus K)<\eta$. This proves closure of $\mathcal R$ under countable unions. Since it contains the open sets, it contains every Borel set. Thus $\mu_r$ is outer regular on Borel sets and compact-inner-regular there; it is finite on compact sets because its total mass is one. It is a Radon Haar probability. Countable Choice was spent in the displayed simultaneous open approximations, and in the inherited Lebesgue-box premise [F5]; no full AC or dependent-choice premise was used. [A1, F6, step 3.3, choose, algebra]

5.1 The construction, compactness, invariance, uniqueness, product law and Radon regularity are established in steps 1.2 through 4.1 under exactly [A1]. Step 2.2 proves continuous orthogonality conditional on given invariant probability data, and step 2.3 proves finite orthogonality without using [A1] or any measure. Finite product expansion gives the vector finite identities, and the product law in step 3.2 gives the vector continuous identities for the constructed measures. In particular $f=\pi^B$ is covered for every positive $B$ and every characteristic. [A1, step 1.2, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1, step 2.2, step 2.3] ∎
