---


id: def-fourier-transform-on-the-total-real-ideal-space
kind: definition
title: "Fourier transform on the totally real ideal space"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-schwartz-functions-on-the-total-real-ideal-space
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-different-of-a-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - thm-global-field-adeles-and-ideles-locally-compact
  - cor-existence-of-left-and-right-haar-measures
  - lem-trace-dual-of-a-fractional-ideal
  - def-axiom-of-choice
  - def-countable-choice
  - thm-field-norm-and-trace-by-embeddings
  - thm-chinese-remainder-theorem
  - thm-chinese-remainder-theorem-for-comaximal-ideals
  - thm-local-valuation-ring-compact-open
  - thm-tychonoff
  - thm-ray-class-group-finite
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-ideal-norm-is-multiplicative
  - def-totally-real-ray-class-group-and-norm-character
dependency_level: 23
justified_by: []
axiom_use: >-
  AC and Countable Choice are used for the global adele topology, Haar measures, and product integration.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne and K. A. Ribet"
      url: "https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf"
      locator: "\u00a72.11\u20132.12, pp. 241\u2013242; \u00a7\u00a74\u20136, pp. 254\u2013273; \u00a78, pp. 277\u2013285."
    - title: "O. Venjakob"
      url: "https://www.mathi.uni-heidelberg.de/~otmar/papervenjakob/Deligne-Ribet-revised.pdf"
      locator: "pp. 10\u201318: moduli, all-cusp q-expansion and integrality discussion."
verification: {}
---
## Definition

Assume AC and Countable Choice through the adelic topology and self-dual measure interfaces. Let $K$ be totally real, put $\widehat K=\mathbb A_{K,f}$, and write $\widehat{\mathfrak a}$ for the closure of a fractional ideal $\mathfrak a$ in $\widehat K$. Let $\mathfrak D$ be the different. The finite additive character is
$$\psi_f(x)=\prod_p\prod_{v\mid p}e^{-2\pi i\{\operatorname{Tr}_{K_v/\mathbb Q_p}(x_v)\}_p},$$
where the $p$-adic fractional part takes its value in $\mathbb Z[1/p]/\mathbb Z$. Its product with $e^{2\pi i\operatorname{Tr}_{K_\infty/\mathbb R}(x_\infty)}$ is trivial on diagonal $K$. Normalize additive Haar measure on $\widehat K$ by $\operatorname{vol}(\widehat{\mathcal O_K})=N(\mathfrak D)^{-1/2}$; equivalently its Fourier transform satisfies $\widehat{\widehat f}(x)=f(-x)$ on locally constant compactly supported functions.

For a fractional ideal $\mathfrak u$ and $x\in\widehat K$, the ideal-space element $\mathfrak u\cdot x$ is defined at conductor $\mathfrak f$ by the class of $(t)\mathfrak u$, where $t\in K$ is totally positive and $t-x\in\widehat{\mathfrak u^{-1}\mathfrak f}$. For $K=\mathbb Q$, the ideal space means the same strict-congruence inverse limit (the positive unit group is $\{1\}$ and the strict ideal class group is trivial). The resulting compatible class is independent of $t$. Every ideal-space element admits such a representation. For a Schwartz function $\phi$ on $\mathcal I_K$, set $\phi_{\mathfrak u}(x)=\phi(\mathfrak u\cdot x)$ on the **finite** adele ring and define
$$\widehat{\phi_{\mathfrak u}}(y)=\int_{\widehat K}\phi_{\mathfrak u}(x)\psi_f(xy)\,dx.$$
The Deligne–Ribet Fourier transform is the Schwartz function on the same ideal space specified by
$$(T\phi)(\mathfrak u^{-1}\cdot y)=N(\mathfrak u)^{-1}\widehat{\phi_{\mathfrak u}}(y).$$
The construction uses the finite-adelic chart, not an archimedean action on the ideal space. It is independent of both the ideal and finite-adele representatives.

## Facts & Assumptions

**Given:** The original AC and Countable Choice assumptions, the totally real field and its inverse-limit strict ideal congruence space. AC also gives DC, when needed by the ideal-space supplier: select one successor for each point of an everywhere-extendible relation and iterate it; no additional public assumption is imposed.

[F1] The strict congruence is $\mathfrak a=(\alpha)\mathfrak b$ with $\alpha>0$ and $(\alpha-1)\mathfrak b\subseteq\mathfrak f$. The ideal space is its inverse limit. Schwartz functions have bounded-denominator support and factor through one conductor quotient, with finite reduction on that support. [[def-totally-real-ray-class-group-and-norm-character]], [[def-schwartz-functions-on-the-total-real-ideal-space]]

[F2] Chinese remainders hold for comaximal ideals. [[thm-chinese-remainder-theorem-for-comaximal-ideals]]

[F3] The trace dual of $\mathfrak a$ is $(\mathfrak a\mathfrak D)^{-1}$. The field trace agrees with the sum of local traces. [[lem-trace-dual-of-a-fractional-ideal]], [[thm-field-norm-and-trace-by-embeddings]]

[F4] AC and Countable Choice supply compact open local valuation rings and compactness of their products. The additive adele group is locally compact Hausdorff, and it has Haar measure under AC. [[thm-local-valuation-ring-compact-open]], [[thm-tychonoff]], [[thm-global-field-adeles-and-ideles-locally-compact]], [[cor-existence-of-left-and-right-haar-measures]]

[F5] The strict ideal class group is finite. Ideal norms are multiplicative, and the norm of $(y)$ is $|N_{K/\mathbb Q}(y)|$. [[thm-ray-class-group-finite]], [[thm-ideal-norm-is-multiplicative]], [[thm-principal-ideal-norm-is-absolute-field-norm]]

[F6] Rational Chinese remainders hold. [[thm-chinese-remainder-theorem]]

## Proof

**Proof technique:** construct the finite-adele charts at each conductor, then apply finite Fourier sums on compact open lattices.

1.1 Given $x\in\widehat K$ and a fractional lattice $\mathfrak l$, choose a positive rational integer $D$ with $Dx\in\widehat{\mathcal O_K}$ and $D\mathfrak l$ integral. Chinese remainders [F2] give $t_0\in D^{-1}\mathcal O_K$ representing $x$ modulo $\widehat{\mathfrak l}$: only the prime powers dividing the integral ideal $D\mathfrak l$ impose conditions. Choose a positive rational integer $H\in\mathfrak l$. Then $t=t_0+jH$ has the same finite congruences and is totally positive for a sufficiently large positive integer $j$. Apply this with $\mathfrak l=\mathfrak u^{-1}\mathfrak f$. For two positive representatives $t,t'$, the ratio $t/t'$ is positive and $(t/t'-1)(t')\mathfrak u=(t-t')\mathfrak u\subseteq\mathfrak f$. Thus $(t)\mathfrak u$ and $(t')\mathfrak u$ are congruent by [F1]. Refining the conductor preserves the class, proving that $\mathfrak u\cdot x$ is defined and continuous. For $y>0$ in $K$, the same formula gives $((y)\mathfrak u)\cdot x=\mathfrak u\cdot(yx)$. [F1, F2, given, construct, algebra]

1.2 Put $U=\overline{\mathcal O_{K,+}^{\times}}\subseteq\widehat{\mathcal O_K}^{\times}$, a compact group by [F4]. In a fixed chart,
$$\mathfrak u\cdot x=\mathfrak u\cdot x'\quad\Longleftrightarrow\quad x=\varepsilon x'\text{ for some }\varepsilon\in U.$$
At each conductor, the defining congruence in [F1] says exactly that $x-\varepsilon x'\in\widehat{\mathfrak u^{-1}\mathfrak f}$ for some totally positive unit $\varepsilon$: equality of principal ideals makes the two positive generators differ by a positive unit. Passage to finite residues gives the same statement for their closures. Conversely, if the ideal-space classes agree, these conditions on $\varepsilon\in U$ are nonempty closed conditions, and any finite set is satisfied at a common refining conductor. Compactness gives one $\varepsilon$ satisfying all of them. The intersection of the fractional-ideal neighborhoods is zero, yielding the asserted equality. [F1, F4, step 1.1, algebra]

1.3 The conductor-$(1)$ component of an ideal-space point determines a strict ideal class. Fix an ideal $\mathfrak u$ in that class. At each conductor its component can be represented by $(t)\mathfrak u$ with $t>0$. The bounded-denominator property from [F1] puts the possible residues of $t$ in a fixed compact fractional-ideal lattice. The closed conditions that $\mathfrak u\cdot x$ have these specified components are nonempty at every finite set of conductors: take a common refinement and its representative. Compactness [F4] gives $x$ satisfying all of them. Thus every point is represented in this chart. There are finitely many chart classes by [F5]. If $\mathfrak u^{-1}\cdot x=\mathfrak v^{-1}\cdot y$, their strict classes give $\mathfrak v=(b)\mathfrak u$ with $b>0$, and step 1.2 then gives $y=b\varepsilon x$ for some $\varepsilon\in U$. These are the complete changes of representatives. [F1, F4, F5, step 1.1, step 1.2, construct, algebra]

2.1 The character $\psi_f$ is defined because all but finitely many coordinates of an adele and its local traces are integral. For $q\in\mathbb Q$, writing its denominator as a product of prime powers and applying [F6] gives $\sum_p\{q\}_p\equiv q\pmod{\mathbb Z}$. Applying this to the field trace and using [F3] proves the claimed global triviality. For each fractional ideal $\mathfrak a$, the annihilator of $\widehat{\mathfrak a}$ under $\psi_f(xy)$ is
$$\widehat{\mathfrak a}^{\perp}=\widehat{\mathfrak a^{-1}\mathfrak D^{-1}}.$$
Indeed the character condition can be tested one finite place at a time. In an integral basis of the local lattice it is the condition that its trace pairings be in $\mathbb Z_p$; the matrix of this trace pairing is the completion of the rational trace matrix. Its inverse describes the completion of the trace-dual lattice of [F3]. This gives precisely the displayed formula at every prime, hence for their product. [F3, F6, given, algebra]

2.2 Each fractional-ideal lattice is compact open by [F4]. Normalize Haar measure by the displayed volume of $\widehat{\mathcal O_K}$. For an integral ideal, its index is its ideal norm, so for every fractional ideal $\mathfrak a$ its lattice has volume $N(\mathfrak a)^{-1}N(\mathfrak D)^{-1/2}$. Step 2.1 gives $\operatorname{vol}(\widehat{\mathfrak a})\operatorname{vol}(\widehat{\mathfrak a}^{\perp})=1$. The integral of a character over a compact additive subgroup is its volume if the character is trivial and zero otherwise: translation by an element on which the character is nontrivial multiplies the integral by a scalar different from $1$. Every locally constant compactly supported function is a finite sum of indicators of cosets of a compact open fractional lattice. Applying the preceding character integral twice to these cosets proves Fourier inversion with reflection, as well as convergence. In particular this constructs the needed self-dual normalization on the finite adele ring. [F3, F4, F5, step 2.1, algebra]

3.1 Suppose $\phi$ is supported on ideals contained in a fractional ideal $\mathfrak b$, and factors through conductor $\mathfrak f$, as in [F1]. In the chart $\mathfrak u$, integrality of the representative ideal $(t)\mathfrak u$ at all primes shows that $\phi_{\mathfrak u}$ is supported on $\widehat{\mathfrak u^{-1}\mathfrak b}$. The same congruence construction shows it is invariant under translation by $\widehat{\mathfrak u^{-1}\mathfrak f}$. Thus it is locally constant and compactly supported, not an archimedean rapidly decreasing function. Step 1.2 also makes it invariant under multiplication by $U$. Finite Fourier sums from step 2.2 imply that $\widehat{\phi_{\mathfrak u}}$ is supported on $\widehat{\mathfrak u\mathfrak f^{-1}\mathfrak D^{-1}}$ and invariant under translation by $\widehat{\mathfrak u\mathfrak b^{-1}\mathfrak D^{-1}}$. [F1, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

3.2 For $b>0$, the chart identity in step 1.1 gives $\phi_{(b)\mathfrak u}(t)=\phi_{\mathfrak u}(bt)$. The change of additive Haar variable gives
$$\widehat{\phi_{(b)\mathfrak u}}(y)=\|b\|_f^{-1}\widehat{\phi_{\mathfrak u}}(b^{-1}y),\qquad\|b\|_f=N((b))^{-1}.$$
Multiplication by $\varepsilon\in U$ preserves the finite additive Haar measure, because it is a unit at every finite place. Invariance of $\phi_{\mathfrak u}$ under $U$ therefore implies invariance of its Fourier transform under $U$ as well. For the full representative change $\mathfrak v=(b)\mathfrak u$, $y=b\varepsilon x$ of step 1.3, it follows that
$$N(\mathfrak v)^{-1}\widehat{\phi_{\mathfrak v}}(y)
=N(\mathfrak u)^{-1}\widehat{\phi_{\mathfrak u}}(x).$$
This proves independence of both representatives in the definition of $T\phi$. [F5, step 1.1, step 1.3, step 2.2, step 3.1, algebra]

4.1 Step 3.1 shows the resulting function is supported on the bounded-denominator piece of ideals contained in $\mathfrak f^{-1}\mathfrak D^{-1}$. Choose an integral conductor $\mathfrak c\subseteq\mathfrak b^{-1}\mathfrak D^{-1}$. In every chart for $\mathfrak u^{-1}$, translation by $\widehat{\mathfrak u\mathfrak c}$ leaves the transformed function unchanged. Together with its $U$-invariance, step 1.2 identifies this as dependence only on the ideal-congruence class modulo $\mathfrak c$. Thus $T\phi$ is locally constant. Its bounded support is contained in the images of finitely many compact chart lattices, one for each strict ideal class by [F5], so it is compactly supported. This proves the full definedness and Schwartz-preservation assertions. [F1, F4, F5, step 1.2, step 1.3, step 3.1, step 3.2, algebra] ∎

## Source correction and reading limits

The source's $\widehat K$ in §§2–3 denotes the finite adele ring. The previous carrier incorrectly substituted $K_\infty$ in the ideal-space chart and integral. The corrected definition follows Deligne–Ribet (2.13)–(2.22) and (3.1)–(3.4), printed pp. 241–247; its quotient-chart and finite Fourier arguments above are supplied locally. This correction does not prove the separate ideal-space functional equation, Hilbert-modular geometry or Eisenstein expansion.

## Definition references

[[def-schwartz-functions-on-the-total-real-ideal-space]]

[[def-totally-real-ray-class-group-and-norm-character]]

[[thm-chinese-remainder-theorem]]

[[thm-field-norm-and-trace-by-embeddings]]

[P. Deligne and K. A. Ribet, §3.1–3.5, pp. 245–254](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)
