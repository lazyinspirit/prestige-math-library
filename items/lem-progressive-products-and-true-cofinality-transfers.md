---
id: lem-progressive-products-and-true-cofinality-transfers
kind: lemma
title: Progressive products and true cofinality transfers
status: draft
origin: pipeline
deps: [def-reduced-ordinal-products-and-scales, def-filter, def-ultrafilter, thm-ultrafilter-lemma, thm-ultrafilter-characterisation, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, §2 pp. 7–13 (Definition 2.2, Lemma 2.3), §3 pp. 30–32 (basic properties 1–4 and Notation 3.3)"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. For a set $A$ of infinite regular cardinals put $\prod A=\{f:\operatorname{dom}f=A,\ f(a)<a\}$ and

$$\operatorname{pcf}(A)=\{\operatorname{cf}(\prod A/D):D\text{ is an ultrafilter on }A\}.$$

Here the quotient comparisons use membership in $D$ of the coordinate comparison set, and the cofinality of an order is the least cardinality of a cofinal subset. Put $\operatorname{pcf}(\varnothing)=\varnothing$. A nonempty $A$ is **progressive** when $|A|<\min A$.

The reduced-product comparisons of the preceding definition are well defined. Each ultraproduct above is a linear order without a last element and has an infinite regular cofinality, at least $\min A$ and at most $|\prod A|$. Moreover $A\subseteq\operatorname{pcf}(A)$, $A\subseteq B$ implies $\operatorname{pcf}(A)\subseteq\operatorname{pcf}(B)$, $\operatorname{pcf}(A\cup B)=\operatorname{pcf}(A)\cup\operatorname{pcf}(B)$, and $\operatorname{pcf}(A)=A$ for finite $A$.

Restriction to a support belonging to an ultrafilter, and extension from that support, give order isomorphisms of the corresponding ultraproducts and preserve their cofinalities.

For proper ideals and products of nonzero limit ordinals, true cofinality is unique and transfers in both directions through an embedding preserving and reflecting the weak and strict comparisons whose image is cofinal. In particular it transfers through strictly increasing coordinate cofinal enumerations. If $c:I\to\mathrm{Reg}$ takes infinite regular values, $|I|<\min\operatorname{ran}c$, and $J$ is proper on $I$, put $B=\operatorname{ran}c$ and $J_c=\{E\subseteq B:c^{-1}[E]\in J\}$. Then $\prod B/J_c$ and $\prod_{i\in I}c(i)/J$ have the same true cofinality whenever either exists. Finally a scale in $\prod A/J$ gives its length as a member of $\operatorname{pcf}(A)$.

## Facts & Assumptions

**Given:** AC; products and proper ideals as in the statement. Every coordinate factor used in a true-cofinality assertion is a nonzero limit ordinal.

[F1] The exceptional-set definitions specify $=_J,\le_J,<_J$, cofinality, directedness and scales ([[def-reduced-ordinal-products-and-scales]]).

[F2] A filter contains the whole set, omits the empty set, is upward closed and closed under finite intersections ([[def-filter]]).

[F3] An ultrafilter contains exactly one of a set and its complement ([[thm-ultrafilter-characterisation]]).

[F4] Under AC every filter extends to an ultrafilter ([[thm-ultrafilter-lemma]]).

[F5] A limit ordinal has infinite regular cofinality and a cofinal subset of that cardinality ([[thm-cofinality-basics]], clauses (c)–(d)).

[F6] A specified recursion rule on a well-order determines a function ([[thm-transfinite-recursion]]).

[A1] AC supplies simultaneous witnesses and choice functions on nonempty families ([[def-axiom-of-choice]]).

## Proof

1.1 The relation $=_J$ is reflexive and symmetric. Its transitivity follows from $\{i:f(i)\ne h(i)\}\subseteq\{i:f(i)\ne g(i)\}\cup\{i:g(i)\ne h(i)\}$. The corresponding failure set for a composite weak or strict inequality is likewise contained in the union of its two failure sets: outside that union the ordinal inequalities compose, strictly if either is strict. This proves transitivity of both comparisons, and the two mixed composition laws. Replacing either function by an $=_J$ equivalent one changes any comparison set only on the union of the equality-exception sets, so truth of the comparisons is unchanged. Mutual weak inequalities mean equality outside their union of exceptions; thus $\le_J$ on the quotient is antisymmetric. For proper $J$, $f<_Jf$ fails because its exception set is $I$. Finally $f(i)+1<h(i)$ for limit-valued factors, so $f+1$ is in the product and strictly exceeds $f$. Weak cofinality and strict cofinality agree: dominate $f+1$ weakly to dominate $f$ strictly. [F1, algebra]

2.1 For proper $J$, its dual $J^*=\{I\setminus E:E\in J\}$ is a filter: it contains $I$, omits $\varnothing$, and complementing finite unions and inclusions gives the other filter axioms. For an ultrafilter $D$, exactly one of the three sets where $f<g$, $f=g$, or $f>g$ belongs to $D$. At least one must belong, since otherwise their three complements would belong and have empty intersection; two cannot belong since they are disjoint. Hence the quotient is linearly ordered, and step 1.1 and the successor operation show it has no last element. The product has its zero function, so this order is nonempty. [F2, F3, step 1.1]

2.2 More generally, suppose a product $P$ modulo a proper ideal has a strict cofinal regular-$\lambda$ chain $(s_\alpha)$. For a family $H$ of size less than $\lambda$, assign to each $h$ its least chain index $\alpha_h$ weakly dominating it. Regularity bounds these indices below $\lambda$; a later chain term strictly dominates every $h$. Thus $P$ is strictly $\lambda$-directed and has no cofinal subset of size less than $\lambda$: a strict bound of a cofinal family would weakly lie below one of its members, contradicting irreflexivity and mixed composition in step 1.1. Its least cofinal cardinal is therefore exactly $\lambda$, proving uniqueness of true cofinality. [step 1.1, F1, F5]

3.1 Let $L$ be one of these linear orders and $\nu$ its least cofinal cardinal. It exists because $L$ is a set and AC makes its subsets well-orderable. It is infinite: a finite cofinal family would have a maximum, hence give a last element. If $\nu$ were singular, enumerate a cofinal family $(q_\alpha)_{\alpha<\nu}$, and take a cofinal set $E\subseteq\nu$ of size $\operatorname{cf}(\nu)<\nu$. Each $\{q_\alpha:\alpha<\eta\}$ for $\eta\in E$ is noncofinal by minimality of $\nu$. In a linear order noncofinality gives a strict upper bound, since a point witnessing failure of cofinality is greater than every member. AC selects these bounds $b_\eta$. They form a cofinal family: for each $q_\alpha$ choose $\eta\in E$ with $\eta>\alpha$, so $q_\alpha<b_\eta$. This contradicts the least size $\nu$. Therefore $\nu$ is regular. Recursively choose $r_\alpha$ strictly above $q_\alpha$ and all earlier $r_\beta$; fewer than $\nu$ terms are noncofinal, so such a bound exists. Fix a choice function on all nonempty subsets of $L$ by AC before applying recursion. The resulting strict cofinal $\nu$-chain proves the existence of a scale in $L$. [step 2.1, F5, F6, A1]

3.2 Let $E:Q\to P$ be an embedding of the weak and strict comparisons with cofinal image. A strict cofinal chain in $Q$ maps to one in $P$. Conversely suppose $P$ has true cofinality $\lambda$. The image is strictly $\lambda$-directed: bound fewer than $\lambda$ image elements strictly in $P$ by step 2.2, then move weakly above that bound into the image. Choose an image point above each member of a fixed cofinal $\lambda$-chain in $P$, giving an image cofinal family $(q_\alpha)$ of length $\lambda$. Recursively choose an image point strictly above $q_\alpha$ and all earlier selected points, using directedness at each $\alpha<\lambda$. AC fixes both the first family of witnesses and a choice function for the recursive bounds, and F6 gives the chain. Pull it back along $E$ to obtain a strict cofinal $\lambda$-chain in $Q$. Its cofinality is $\lambda$ by step 2.2. [step 2.2, F6, A1]

3.3 If $\prod A/J$ has a scale of length $\lambda$, extend the dual filter from step 2.1 to an ultrafilter $D$ using F4. Every strict comparison holding modulo $J$ holds modulo $D$, since its good set lies in $J^*\subseteq D$. The same functions still form a strict cofinal $\lambda$-chain, as each function was already weakly dominated modulo $J$. By step 2.2 its ultraproduct has cofinality exactly $\lambda$, so $\lambda\in\operatorname{pcf}(A)$. [step 2.1, F4, step 2.2]

3.4 If $D$ is an ultrafilter on $A$ and $B\in D$, restriction gives the ultrafilter $D_B=\{E\subseteq B:E\in D\}$ on $B$. The filter axioms and complementary-pair test follow from F2–F3 and $B\in D$. Restriction of product functions gives an order isomorphism of ultraproducts: comparison sets belong to $D$ exactly when their intersections with $B$ do; every function on $B$ extends by zero outside $B$. Conversely an ultrafilter on $B\subseteq A$ extends to $\{E\subseteq A:E\cap B\in D_B\}$, and the same computation gives the inverse isomorphism. Principal ultrafilters at $a\in A$ identify the ultraproduct with the ordinal $a$, whose cofinality is $a$ by its assumed regularity. Hence $A\subseteq\operatorname{pcf}(A)$, and extension from a support proves monotonicity. [F2, F3, F5, step 2.1]

4.1 In $\prod A$, every family $\mathcal H$ of size less than $\min A$ has the pointwise strict bound $b(a)=\sup\{f(a)+1:f\in\mathcal H\}<a$. Indeed regularity of $a$ forbids a cofinal subset of size less than $a$; the empty family gives $b=0$. Thus no such family can be cofinal in a proper ultraproduct, by step 1.1. Any cofinal family of quotient classes of size less than $\min A$ would, using AC to choose representatives, contradict this bound. Consequently $\nu\ge\min A$. AC also chooses representatives of all quotient classes, injecting the quotient into the product, so $\nu\le|\prod A|$. Ultrafilters form a subset of $\mathcal P(\mathcal P(A))$, and Replacement sends them to their cofinalities, proving that $\operatorname{pcf}(A)$ is a set of infinite regular cardinals. [step 1.1, step 3.1, F5, A1]

4.2 For nonzero limit-valued $h$, choose strictly increasing cofinal maps $e_i:\operatorname{cf}(h(i))\to h(i)$. To construct one, enumerate a cofinal subset as $(t_\xi)_{\xi<\mu}$, where $\mu=\operatorname{cf}(h(i))$. At stage $\xi<\mu$, the previously chosen values and $t_\xi$ have cardinality less than $\mu$ and so are bounded below $h(i)$ by F5. Their supremum plus one is still below the limit $h(i)$; take it as $e_i(\xi)$. F6 gives a strictly increasing cofinal map. AC selects the initial enumerations for all coordinates. The map $f\mapsto(i\mapsto e_i(f(i)))$ preserves and reflects all coordinate comparisons, hence their versions modulo $J$. Its image is cofinal: given $g\in\prod h$, at each coordinate take the least ordinal $\xi$ with $g(i)\le e_i(\xi)$, which exists by cofinality. This defines an image bound without further choice. Step 3.2 proves the asserted transfer; no claim that the ceiling operation preserves strict inequalities is used. [F5, F6, A1, step 3.2]

4.3 For the repetition map, $J_c$ is an ideal because inverse images preserve empty sets, inclusions and unions, and it is proper since $c^{-1}[B]=I\notin J$. For $e\in\prod B$ set $E(e)=e\circ c$. Every comparison's exception set is the inverse image under $c$ of the corresponding exception set on $B$, so this induces an embedding of equality and both orders. Given $t\in\prod_{i\in I}c(i)$, put $e(b)=\sup\{t(i)+1:c(i)=b\}$. Each fiber has size at most $|I|<b$, so regularity gives $e(b)<b$, and $E(e)(i)>t(i)$ for all $i$. Thus the image is cofinal, and step 3.2 proves transfer in both directions. Only an isomorphism onto the image is claimed. [F5, step 3.2, algebra]

5.1 An ultrafilter on $A\cup B$ contains $A$ or $B$: if it omits $A$, it contains $(A\cup B)\setminus A\subseteq B$, and upward closure applies. Step 3.4 then gives $\operatorname{pcf}(A\cup B)\subseteq\operatorname{pcf}(A)\cup\operatorname{pcf}(B)$, and monotonicity gives the reverse inclusion. A singleton support has only its principal ultrafilter, with cofinality its coordinate cardinal. Finite induction using the union formula therefore yields $\operatorname{pcf}(A)=A$ for every finite $A$, including the empty case: an ultrafilter on the empty set would both contain and omit the empty set by F2. These proofs cover all infinite regular coordinates, including $\omega$, and in particular every progressive set. QED. [F2, F3, step 3.4]
