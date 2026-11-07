---
id: lem-choice-free-identification-of-padic-algebraic-closure-completions
kind: lemma
title: Choice-free identification of the two p-adic algebraic-closure completions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-choice-free-finite-ax-sen-approximation
  - lem-choice-free-ball-nest-completion-of-a-nonarchimedean-field
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - def-field-of-p-adic-numbers
  - thm-monic-polynomial-division
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Marc Fontaine and Yi Ouyang, Theory of p-adic Galois Representations"
      url: "https://www.imo.universite-paris-saclay.fr/~fontaine/galoisrep.pdf"
      locator: "Section3.1.2, Proposition3.3; uniform finite Ax estimate reconstructed locally and applied to deterministic symmetric-root-cluster approximations"
    - title: "Brian Conrad, Ostrowski for number fields"
      url: "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf"
      locator: "Section5, completion characterization; choice-free model identification proved here at the specified p-adic algebraic-closure input"
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN algebraic closure with an absolute value extending $|\cdot|_p$. Let $C_{\mathrm{seq}}$ be the metric quotient of the $F$-valued Cauchy sequences, and let $C_{\mathrm{ball}}=F^{\mathrm{ball}}$ be the ball-nest completion. Sending a sequence class to its limit in $C_{\mathrm{ball}}$ is a canonical bijective isometry
$$C_{\mathrm{seq}}\xrightarrow{\sim}C_{\mathrm{ball}}.$$
It respects the field operations extending those of $F$. In particular $C_{\mathrm{seq}}$ is a complete nonarchimedean valued field without any Choice assumption, and its valuation ring is canonically complete for powers of every scalar $\pi$ with $0<|\pi|<1$.

More precisely, there are specified functions $a_n:C_{\mathrm{ball}}\to F$ with $|a_n(x)-x|<2^{-n}$, constructed by least-index searches among rational polynomials and rational expressions in canonically determined finite root-cluster coefficients. No enumeration of $F$ is assumed. For every isometric field embedding $F\to D$ into a sequentially complete valued field, there is a unique extending isometric field embedding $C_{\mathrm{seq}}\to D$; it is onto if $F$ is dense in $D$. Thus the two constructions give the usual unique valued-field completion at this exact input, without Countable Choice. No Fontaine-map surjectivity is asserted.

## Facts & Assumptions

**Given:** The valued algebraic closure. The functions constructed below use only uniquely determined finite sets, their symmetric coefficients and least natural indices, not a choice of one root from every polynomial.

[F1] Finite intermediate fields of $F/\mathbb Q_p$ are complete and their finite embeddings are isometric. If $E$ is one such field and $\alpha\in F\setminus E$, there is $y\in E$ with $v(\alpha-y)>\Delta_E(\alpha)-C_p$, where $C_p=p/(p-1)^2$ and $v(p)=1$. [[lem-choice-free-finite-ax-sen-approximation]]

[F2] The ball-nest model is a complete valued field with dense original field, and its valuation ring has the stated canonical adic completeness for every scalar $0<|\pi|<1$. [[lem-choice-free-ball-nest-completion-of-a-nonarchimedean-field]]

[F3] A simple residue root of a polynomial in a complete valuation ring lifts using nonmonic Hensel factor lifting. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] The rational embedding in $\mathbb Q_p$ is dense and specified without Choice. [[def-field-of-p-adic-numbers]]

[F5] Monic polynomial division holds over a field. [[thm-monic-polynomial-division]]

## Proof

1.1 The elements of $F$ algebraic over $\mathbb Q$ are dense in $F$. To see this, fix $\alpha\in F$ and a positive tolerance. Let $P\in\mathbb Q_p[T]$ be its monic minimal polynomial. It is separable: in characteristic zero $P'\ne0$, and $P'(\alpha)=0$ would make $P$ divide its lower-degree derivative by [F5]. Work in the complete finite field $M=\mathbb Q_p(\alpha)$ from [F1], and put $e=P'(\alpha)\ne0$. Write $P(\alpha+Z)=eZ+\sum_{j\ge2}c_jZ^j$. Choose one nonzero $t\in\mathbb Q_p$ smaller than the desired tolerance, with $|t^{j-1}c_j|\le|e|$ for every $j\ge2$. By [F4] approximate the finitely many coefficients of $P$ sufficiently closely by rationals, keeping the leading coefficient monic, to obtain $G\in\mathbb Q[T]$ such that $h(U)=G(\alpha+tU)/(te)$ has integral coefficients, constant in the maximal ideal, and linear coefficient a unit. These conditions are finitely many open inequalities for its coefficients; the higher-coefficient bounds can first be made strict by making $t$ smaller. The reduction of $h$ has the simple root $0$. By [F3], $h$ has a root $u$ in the maximal ideal of $M$. Then $\beta=\alpha+tu$ is a root of $G$ with $|\beta-\alpha|<|t|$, proving the claim. Only finitely many approximations and one Hensel lift were used. [F1, F3, F4, F5, given, construct, algebra]

2.1 Fix explicit enumerations of the monic nonconstant rational polynomials and of finite rational expressions in a finite ordered list of symbols. They can be coded by finite integer lists, with rationals coded by their coprime numerator and positive denominator; invalid division-by-zero expressions are assigned value zero. Let $h$ be the least integer greater than $C_p+2$. For $x\in C_{\mathrm{ball}}$ and $n\ge0$, set $\delta=2^{-n}p^{-h}$. By step 1.1 and density in [F2], some monic nonconstant rational polynomial has a root in $F$ within $\delta$ of $x$. Take the least index of such a polynomial $G$. Let $S$ be the set of ALL its distinct roots $\alpha\in F$ with $|\alpha-x|<\delta$. This is a nonempty finite set: successive linear division in [F5] bounds the number of distinct roots by the degree. Form its monic cluster polynomial $Q_S(T)=\prod_{\alpha\in S}(T-\alpha)$ and its ordered coefficient list $c_0,\ldots,c_{r-1}$. These coefficients are defined by finite symmetric sums; no ordering or selected root of $S$ is used in their construction. Put $E=\mathbb Q_p(c_0,\ldots,c_{r-1})\subseteq F$, a finite intermediate field. [F2, F5, step 1.1, construct, algebra]

3.1 For any ONE $\alpha\in S$, every $E$-conjugate is again in $S$, since its minimal polynomial divides $Q_S$ by [F5]. Thus all its conjugate distances are less than $\delta$. The finite estimate [F1] gives $y\in E$ with $|\alpha-y|<p^{C_p}\delta$; if $\alpha\in E$, take $y=\alpha$. Therefore $|x-y|<p^{C_p}\delta<2^{-n}$. Rational expressions in the specified coefficients $c_i$, with rational coefficients, are dense in $E$: each element is a rational expression with finitely many $\mathbb Q_p$ coefficients, which may be approximated by [F4] while keeping its nonzero denominator nonzero. Hence at least one of the enumerated expressions has value within $2^{-n}$ of $x$. Define $a_n(x)$ by its least such index. Everything used to define this value was unique: the polynomial index, finite root set, ordered symmetric coefficients and rational-expression index. The one $\alpha$ and $y$ in this paragraph only prove existence of a successful search, and are not part of its output data. Consequently $(n,x)\mapsto a_n(x)$ is a specified function in ZF, and $|a_n(x)-x|<2^{-n}$ holds for all $n,x$. [F1, F4, F5, step 2.1, construct, algebra]

4.1 Each given Cauchy sequence $s$ in $F$ has a unique limit $\ell(s)$ in $C_{\mathrm{ball}}$ by [F2]. The triangle inequality shows that $|s_n-t_n|\to0$ if and only if $\ell(s)=\ell(t)$, and that $\lim_n|s_n-t_n|=d(\ell(s),\ell(t))$. Consequently the conventional sequence relation is an equivalence relation and its conventional quotient distance is a metric: both facts follow directly from this limit map. It defines an isometric injection $J:C_{\mathrm{seq}}\to C_{\mathrm{ball}}$. For every $x\in C_{\mathrm{ball}}$, the actual sequence $(a_n(x))$ from step 3.1 is Cauchy and converges to $x$. Hence $J$ is surjective. Termwise sums and products of Cauchy sequences agree with sums and products of their limits; reciprocal tails of a nonzero class are Cauchy and give its inverse. Thus $J$ is an isomorphism of valued fields. Completeness and the asserted valuation-ring adic isomorphisms transfer from [F2]. This directly constructs and proves completeness of this particular sequence quotient; no general metric-completion theorem is invoked. [F2, step 3.1, construct, algebra]

5.1 For an isometric embedding $i:F\to D$ with $D$ sequentially complete, send a Cauchy-sequence class to the unique limit of its image sequence in $D$. Equivalence of representatives makes this a well-defined function; it selects the unique output, not one representative for every class. Limits of termwise operations show it is a field embedding and an isometry. Any extending isometry must take these limits to the same limits, proving uniqueness. If $i(F)$ is dense in $D$, repeat the construction of steps 2.1–3.1 for any $z\in D$, using its distance to $i(F)$: step 1.1 supplies the rational-algebraic density, the finite root clusters remain in $F$, and the finite Ax estimate is unchanged by the isometry $i$. It gives an actual sequence of elements of $F$ whose images converge to $z$. Thus the embedding from $C_{\mathrm{seq}}$ is onto. No algebraic closedness or filter completeness of $D$ is needed for this last argument. It proves the claimed usual completion characterization and completes the proof. [F1, F2, F4, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

## Source notes

The uniform finite Ax estimate is locally reconstructed from the full derivative-induction proof in Fontaine–Ouyang, Proposition3.3/Lemma3.5. Ordinary trace averaging would lose $v_p$ of the cluster size and is insufficient here; it is not substituted for the uniform estimate. The symmetric-root-cluster and least-expression construction above is the actual choice-free approximation mechanism.

This lemma resolves the completion-model distinction specifically for a GIVEN valued algebraic closure of $\mathbb Q_p$. It does not remove Countable Choice from arbitrary metric completion theorems or assert that an arbitrary algebraic closure is chosen without Choice. It preserves the ordinary Cauchy-sequence convention and proves it equals the already constructed ball model, with its stronger completeness properties. It does not use an external Ax theorem as an imported input and does not prove Fontaine-map surjectivity.
