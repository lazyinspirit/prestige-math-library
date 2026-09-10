---
id: lem-zf-arithmetic-interpretation-and-effective-axioms
kind: lemma
title: "ZF has an effective standard arithmetic interpretation"
status: draft
origin: pipeline
deps: [def-robinson-q-and-peano-arithmetic, def-effective-interpretation-and-proof-translation, lem-primitive-recursive-syntax-and-proof-checking, def-coded-first-order-zf-theory, thm-recursion, thm-induction-principle, thm-hilbert-bernays-lob-derivability-conditions]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — Proposition 4C.3 p150 (statement only); local proof via earlier ω recursion and induction"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---


## Statement

ZF and ZFC have effective axiom presentations and an interpretation of PA on the actual internally defined $\omega$, using von Neumann zero/successor and recursively defined addition/multiplication. For their standard presentations the arithmetic proof constructors and translations needed for D1–D3 are verifiable in that interpretation. AC is unnecessary for the PA interpretation; ZFC adds one encoded Choice sentence.

## Facts & Assumptions

[F1] [[def-coded-first-order-zf-theory]]: Work in the external metatheory ZF. Use the pure membership signature with logical equality and the finite-word constructors of def-set-coded-terms-and-formulas. For any displayed ordinary formula below, its **code** is obtained by expanding abbreviations and serializing those constructors. In particular $\phi\leftrightarrow\psi$ means $(\phi\to\psi)\land(\psi\to\phi)$, implication, disjunction and universal quantification have the earlier primitive expansions, and

$$\exists!w\,\phi(w)\quad\text{means}\quad\exists w\bigl(\phi(w)\land\forall v(\phi[v/w]\to v=w)\bigr),$$

with $v$ the least-index variable absent from $\phi$ and distinct from $w$. Bounded quantifiers mean $\forall x\in A\,\phi:=\forall x(x\in A\to\phi)$ and $\exists x\in A\,\phi:=\exists x(x\in A\land\phi)$. All bound-variable renamings and substitutions are capture-free. These are finite syntactic operations, not new logical primitives.

Let $T_{\mathrm{ZF}}$ contain the codes of exactly the following six sentences, together with all instances of the two schemas below. The six sentences are those in def-axiom-of-extensionality, def-axiom-of-pairing, def-axiom-of-union, def-axiom-of-power-set, def-axiom-of-infinity and def-axiom-of-foundation:

$$\forall x\forall y\bigl(\forall z(z\in x\leftrightarrow z\in y)\to x=y\bigr);$$

$$\forall x\forall y\exists z\forall t\bigl(t\in z\leftrightarrow(t=x\lor t=y)\bigr);$$

$$\forall x\exists y\forall z\bigl(z\in y\leftrightarrow\exists s(s\in x\land z\in s)\bigr);$$

$$\forall x\exists y\forall z\bigl(\forall t(t\in z\to t\in x)\to z\in y\bigr);$$

$$\exists I\bigl(\exists e(e\in I\land\neg\exists t(t\in e))\land\forall y(y\in I\to\exists s(s\in I\land\forall t(t\in s\leftrightarrow(t\in y\lor t=y))))\bigr);$$

$$\forall S\bigl(\exists t(t\in S)\to\exists s(s\in S\land\neg\exists u(u\in s\land u\in S))\bigr).$$

Power Set deliberately has the implication-only form of the published supplier. Infinity deliberately uses von Neumann successor, exactly as in the supplier, rather than the singleton-closure presentation in Moschovakis 1A.5.

For every membership-language formula $\phi(z,\bar p)$, choose distinct fresh variables $x,y$ absent from it and include the universal closure of

$$\exists y\forall z\bigl(z\in y\leftrightarrow(z\in x\land\phi(z,\bar p))\bigr).$$

This is the Separation schema of def-axiom-schema-of-separation, with the input $x$ and all parameters universally quantified. For every $\phi(z,w,\bar p)$ choose distinct fresh $A,B$ absent from it and include the universal closure of

$$\forall z(z\in A\to\exists!w\phi(z,w,\bar p))\to\exists B\forall w\bigl(w\in B\leftrightarrow\exists z(z\in A\land\phi(z,w,\bar p))\bigr).$$

This is the functional-image form of def-axiom-schema-of-replacement. Parameters are precisely the other free variables, listed in increasing variable-index order; they may be an empty list. Distinct variables $z,w$ are used for the two designated places. Choose fresh variables by their least available indices, renaming bound occurrences first if necessary. Universal closure binds every remaining free variable in increasing index order. This convention changes only variable names and closure order, and leaves no free parameter in an axiom sentence.

The alphabet is explicitly countable, and lem-countable-henkin-syntax-coding supplies an injection of its sentence set into $\omega$. Schema membership and these finite transformations are set-definable, so Separation on the set of sentence codes (equivalently Replacement over the set of admissible formulas and designated variable lists) forms $T_{\mathrm{ZF}}$ as a set. It is a sentence theory, not a class-sized collection. AC is excluded. No consistency, set-model existence, transitivity or external well-foundedness of models is asserted.

Conventions and prerequisites: def-language-of-set-theory, def-free-variables-and-syntactic-substitution.

[F2] [[lem-primitive-recursive-syntax-and-proof-checking]]: For the fixed effective signature and sentinel encoding, term/formula recognition, free-variable and free-for tests, capture-free substitution, numeral formation, negation, and certified derivation checking are primitive recursive. Invalid inputs return zero or false.

[F3] [[thm-recursion]]: Let $(N,0,\sigma)$ be a Peano system (def-peano-system), in particular the natural numbers $\mathbb{N}$ (def-natural-numbers). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

[F4] [[def-effective-interpretation-and-proof-translation]]: An interpretation of a sentence theory S in T specifies formulas D(x) and E(x,y), invariant relation formulas, and functional graph formulas. T proves D nonempty, E an equivalence on D, invariance under E of all relations and graphs, and totality and uniqueness modulo E of each function graph on domain-valued inputs. Fixed parameters are target constants. No other free variables occur in the interpretation data.

Define a domain-valued term graph by $V_x(z):=D(z)\land E(x,z)$ and $V_{f(\bar t)}(z):=D(z)\land\exists\bar u(\bigwedge_iV_{t_i}(u_i)\land F_f(\bar u,z))$; the nullary case uses the constant graph. Atomic relations and equality quantify term values and then apply the interpreted relation or E. Translation commutes with negation/conjunction and replaces $\exists x\phi$ by $\exists x(D(x)\land\phi^I)$, always using fresh bound variables. T must prove every translated source axiom.

For a source formula $\phi$ put $G_{\mathrm{FV}(\phi)}=\bigwedge_{v\in\mathrm{FV}(\phi)}D(v)$. Its guarded proof translation is $G_{\mathrm{FV}(\phi)}\to\phi^I$. For sentences the empty guard is a fixed tautology. Effective certificate data provides the required target certificates effectively. Formalized data additionally provides a base-verifiable total primitive-recursive map on proof codes; effectiveness alone does not assert that stronger property.

Use def-set-coded-formal-derivation for the calculus and lem-primitive-recursive-syntax-and-proof-checking for the finite numerical operations. Logical theorem preservation is a conclusion of the next lemma, not an interpretation axiom. No quotient representatives or choice function are specified.

[F5] [[thm-induction-principle]]: Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

[F6] [[def-robinson-q-and-peano-arithmetic]]: Use the arithmetic signature $0,S,+,\cdot,=$. Robinson arithmetic $Q$ consists of the universal closures of these seven formulas:

$$Sx\ne0;\quad Sx=Sy\to x=y;\quad x\ne0\to\exists y\,x=Sy;$$
$$x+0=x;\quad x+Sy=S(x+y);\quad x\cdot0=0;\quad x\cdot Sy=x\cdot y+x.$$

PA adds, for every formula $\phi(x,\bar z)$, the universal closure of $[\phi(0,\bar z)\land\forall x(\phi(x,\bar z)\to\phi(Sx,\bar z))]\to\forall x\phi(x,\bar z)$. Parameters $\bar z$ are allowed. No induction schema is included in $Q$.

For an external natural number $n$, its numeral is the term $\bar n=S^n0$. Define $x\le y$ by $\exists z(z+x=y)$ and $x<y$ by $x\le y\land x\ne y$, with $z$ fresh. The left-addend witness is intentional: commutativity is not an axiom of Q.

Use def-set-coded-formal-derivation for the six logical schemes and three rules. Negation, conjunction and existential quantification are primitive: $A\to B$ expands to $\neg(A\land\neg B)$, $A\lor B$ to $\neg(\neg A\land\neg B)$, and $\forall x A$ to $\neg\exists x\neg A$. Inequality means negated equality. Substitute capture-free, always taking the least available fresh variable index and universally closing the remaining parameters in increasing index order. Thus each displayed axiom and each induction instance is a definite finite sentence.

[F7] [[thm-hilbert-bernays-lob-derivability-conditions]]: For the standard certified predicate of an effective T extending PA, the following hold for sentences $\phi,\psi$: D1, if $T\vdash\phi$ then $T\vdash\operatorname{Prov}_T(\ulcorner\phi\urcorner)$; D2, T proves $\operatorname{Prov}_T(\ulcorner\phi\to\psi\urcorner)\to(\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\psi\urcorner))$; D3, T proves $\operatorname{Prov}_T(\ulcorner\phi\urcorner)\to\operatorname{Prov}_T(\ulcorner\operatorname{Prov}_T(\ulcorner\phi\urcorner)\urcorner)$. The interpreted version requires an effective PA copy and verification there of the arithmetic proof constructors and axiom-proof translations used below.

## Proof

**Given:** ZF with its fixed axiom serialization and internal omega; for ZFC append its Choice sentence.

1.1 Use the exact six sentences and two schemas in F1, including implication-only Power Set and von Neumann Infinity. A schema certificate consists of the schema tag, source formula and designated variable indices. The tests in F2 compute the fresh-variable renaming, ordered parameter list and universal closure and compare the result to the proposed axiom. Thus the certificate test is primitive recursive. The six fixed sentences have fixed certificates, as does the additional Choice sentence in ZFC. Every displayed axiom has one such certificate and every accepted certificate is a displayed axiom. [F1, F2, given]

1.2 Let D be membership in omega, E actual equality, zero the empty set, and successor $n\cup\{n\}$. Recursion F3 gives addition on omega with $a+0=a$ and $a+S n=S(a+n)$, and then multiplication with $a\cdot0=0$ and $a\cdot S n=a\cdot n+a$. Their graphs are total and single-valued on D, so satisfy the interpretation obligations F4. Von Neumann successor is nonzero. If $S m=S n$, ordinal comparison would give $m<n$, $m=n$ or $n<m$; either strict case makes one successor a proper initial segment of the other. Thus m=n. Every nonzero natural is a successor by omega induction F5: zero is the base and a successor is a successor. Together these facts prove the seven translated Q axioms F6. [F3, F4, F5, F6, given]

2.1 For a fixed arithmetic formula phi and its translated parameters, Separation forms $A=\{n\in\omega:\phi^I(n,\bar p)\}$. The translated induction antecedent says $0\in A$ and that A is successor-closed. F5 gives A=omega, precisely the induction conclusion. This construction works for every formula with its parameters and uses no Choice. The domain is nonempty because 0 belongs to omega. [F1, F5, step 1.2]

3.1 The formula-to-Separation-instance map consists of the fixed relativization/term-graph templates and the least-fresh-variable operations of F2. The proof of its induction conclusion is a fixed proof template using that Separation instance and the fixed omega-induction theorem. Consequently its code and schema certificate are primitive-recursive functions of the formula code. The finitely many Q-axiom translation blocks are fixed; replacing each PA-axiom line by the corresponding block, shifting premise indices, and appending the translated logical-rule blocks constructs the arithmetic proof map. Induction over the source lines verifies this map in the interpreted PA arithmetic: a schema line passes the explicit schema test in step 1.1, a fixed line uses its fixed certificate, and a rule line has exactly the shifted earlier premises. The primitive-recursive arithmetic/list constructors are total there by the representation construction and PA induction. Thus the standard checks meet the formalization requirements of F7, giving D1–D3 for ZF, ZFC and their finite effective extensions. [F2, F7, step 1.1, step 1.2, step 2.1] ∎

