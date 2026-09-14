---
id: thm-countably-closed-forcing-adds-a-normal-suslin-tree
kind: theorem
title: "A countably closed forcing adds a normal Suslin tree"
status: published
origin: pipeline
deps: [def-countable-normal-tree-end-extension-forcing, lem-countable-tree-antichain-sealing, def-kappa-closure-distributivity-and-chain-condition, thm-closure-distributivity-and-no-short-sequences, cor-countable-choice-and-omega-one-cofinality, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-transfinite-recursion, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision, def-forcing-relation-for-atomic-formulas, thm-forcing-preserves-ordinals, thm-generic-extensions-satisfy-zf-and-zfc, thm-zorn, def-aronszajn-suslin-and-special-tree, lem-splitting-cofinal-branch-gives-antichain, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Theorem 4.25 and complete proof, printed p. 25"
      url: https://karagila.org/files/Forcing-2023.pdf
    - title: "Monk, Set theory following Jech, Lemmas 15.31-15.33 and Theorem 15.38 with complete proofs, printed pp. 271-275"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $\mathbb P_{\mathrm{ST}}$ be the countable normal-tree end-extension
forcing, and let $\dot T$ be the canonical name whose value at a generic filter
$G$ is obtained from

$$\dot T=\{\langle\check t,p\rangle:p\in P\text{ and }t\in T_p\},\qquad T_G=\dot T_G=\bigcup\{T_p:p\in G\}.$$

In ZFC, $\mathbb P_{\mathrm{ST}}$ is countably closed, preserves $\omega_1$,
and forces $\dot T$ to be a normal $\omega$-splitting Suslin tree of height
$\omega_1$. This is an assertion of the internal forcing relation; it does not
assert that a generic filter over the universe exists.

## Facts & Assumptions

**Given:** ZFC and the forcing $P=\mathbb P_{\mathrm{ST}}$. Write
$p=(\alpha_p,T_p)$.

[F1] Conditions have countable successor height, fixed sequence coding, normal
$\omega$-splitting trees, and literal end extension; $1_P=(0,\{\varnothing\})$
is a condition. [[def-countable-normal-tree-end-extension-forcing]]

[F2] A maximal antichain in a countable normal splitting tree of nonzero
countable limit height can be sealed by a countable new top level, with every
new top extending that antichain. [[lem-countable-tree-antichain-sealing]]

[F3] Countably closed means that every descending sequence of length below
$\aleph_1$ has a lower bound. [[def-kappa-closure-distributivity-and-chain-condition]]

[F4] An $\aleph_1$-closed forcing adds no countable sequences of ground-model
elements and preserves ground-model cardinals and cofinalities at most
$\aleph_1$. [[thm-closure-distributivity-and-no-short-sequences]]

[F5] Under countable choice, $\operatorname{cf}(\omega_1)=\omega_1$.
[[cor-countable-choice-and-omega-one-cofinality]]

[F6] Under countable choice, countable unions of countable sets are countable,
including the countable fusion unions used below.
[[thm-countable-union-of-countable]]

[F7] Transfinite recursion constructs a sequence from a specified stage rule.
[[thm-transfinite-recursion]]

[F8] The forcing theorem gives the internal forcing relation and truth lemma,
without asserting generic existence. [[thm-forcing-theorem]]

[F9] Forcing is persistent to stronger conditions, is closed under dense truth,
and has dense deciding extensions. [[lem-forcing-monotonicity-density-and-decision]]

[F10] Atomic membership forcing is a density condition on coefficients of the
right-hand name. [[def-forcing-relation-for-atomic-formulas]]

[F11] Forcing preserves ordinals as sets. [[thm-forcing-preserves-ordinals]]

[F12] A generic extension of a transitive ZFC ground is again a transitive ZFC
model. [[thm-generic-extensions-satisfy-zf-and-zfc]]

[F13] Under AC, every antichain extends to a maximal antichain by Zorn's lemma.
[[thm-zorn]]

[F14] A Suslin tree has height $\omega_1$, countable levels, no cofinal branch,
and no uncountable antichain. [[def-aronszajn-suslin-and-special-tree]]

[F15] In ZFC, a cofinal branch through a splitting $\omega_1$-tree produces an
antichain of cardinality $\aleph_1$.
[[lem-splitting-cofinal-branch-gives-antichain]]

[F16] Under countable choice, a countable subset of $\omega_1$ is bounded below
$\omega_1$. [[thm-countable-subsets-of-omega-one-are-bounded]]

[A1] AC supplies countable unions, simultaneous enumerations, recursive
extension choices, Zorn's lemma, and the choice used by F15.
[[def-axiom-of-choice]]

## Proof

1.1 Let $(p_\xi)_{\xi<\eta}$ be descending, where $\eta<\omega_1$. The empty sequence has lower bound $1_P$, and a successor-length sequence has its last member as a lower bound. Suppose $\eta$ is nonzero limit and put $\delta=\sup_{\xi<\eta}(\alpha_{p_\xi}+1)$ and $U=\bigcup_{\xi<\eta}T_{p_\xi}$. The ordinal $\delta$ is below $\omega_1$ by F16. Using a surjection from $\omega$ onto the countable ordinal $\eta$, F6 makes $U$ countable. Literal end extension makes its levels coherent. If $\delta$ is a successor, its value is attained by some $\alpha_{p_\xi}+1$; all later conditions then have the same height and hence are equal to $p_\xi$, so $p_\xi$ is a lower bound. If $\delta$ is limit, $U$ has height $\delta$: every node has extensions on all higher levels because some later condition reaches each such level, and every nontop successor level already occurs in a condition, so normality and full $\omega$-splitting persist. Its root singleton is a maximal antichain. Apply F2 to that singleton and identify each new branch-top with the union of its sequence branch; the resulting fixed-coded tree $q$ has top level $\delta$, is a condition, and end extends every $p_\xi$. [F1, F2, F6, F16, A1, given]

2.1 Step 1.1 supplies a lower bound for every descending sequence of every length $\eta<\omega_1$, including lengths zero, one, successor, and nonzero limit. By F3, $P$ is $\aleph_1$-closed, that is, countably closed. [F3, step 1.1]

3.1 F5 verifies the regularity hypothesis needed to apply F4 at $\kappa=\aleph_1$, so step 2.1 implies that $P$ preserves $\omega_1$ and adds no countable sequence of ground-model elements. For every $\beta<\omega_1$, let $D_\beta=\{p:\alpha_p\ge\beta\}$. A one-level extension is obtained by adjoining $t^\frown\langle n\rangle$ for every old top node $t$ and every $n<\omega$; it remains countable by F6. Iterating this operation, and using step 2.1 for lower bounds at countable limit stages, F7 and A1 produce below any condition a member of $D_\beta$. Thus every $D_\beta$ is dense. [F1, F4, F5, F6, F7, A1, step 2.1]

4.1 If two conditions have a common extension, their heights are comparable and literal restriction from that common extension shows that the taller end extends the shorter. Hence a generic filter's conditions form an end-extension chain and $T_G$ is coherent. By density of every $D_\beta$, it has a level at every ground ordinal $\beta<\omega_1$; F4 and F11 say that this is still exactly the extension's $\omega_1$. For a fixed $\beta$, once $p\in G$ has $\alpha_p\ge\beta$, every condition in $G$ is compatible with $p$ and all taller ones have exactly $(T_p)_\beta$, so $(T_G)_\beta=(T_p)_\beta$ is countable. The same directed common-extension argument supplies every higher-level extension of each node, while the literal successor levels retain full $\omega$-splitting and function extensionality retains limit uniqueness. Thus $T_G$ is a normal $\omega$-splitting $\omega_1$-tree with countable levels. [F1, F4, F8, F11, step 3.1]

5.1 Fix $p_0$ and a name $\dot A$ with $p_0\Vdash$ “$\dot A$ is a maximal antichain of $\dot T$.” If $r\le p_0$ and $s\in T_r$, then $r$ forces that some member of $\dot A$ is comparable with $s$. By F8 and F9, strengthen to choose a name for such a member. It is forced to be a node of $\dot T$, hence a natural-valued sequence whose ordinal domain is below $\omega_1$; F9 and F11 first decide that ground ordinal domain, and F4 then lets a further extension decide the whole sequence as a ground node $t$. Finally F10 and the displayed canonical-union name say that conditions whose tree contains $t$ are dense below a condition forcing $t\in\dot T$: a membership coefficient is a condition containing $t$, and a common extension contains it by end extension. We may therefore find $r'\le r$ with $t\in T_{r'}$ and $r'\Vdash$ “$t\in\dot A$ and $t$ is comparable with $s$.” All strengthenings preserve earlier decisions by F9. [F1, F4, F8, F9, F10, F11, step 4.1]

6.1 Starting below an arbitrary $r_0\le p_0$, use A1 to enumerate the countable tree of the current condition. Apply step 5.1 successively to every node in that enumeration, take a lower bound of the resulting descending omega-sequence by step 2.1, and then strengthen into the dense set whose top is strictly higher. Repeat this outer construction for $n<\omega$. Let $U=\bigcup_nT_{p_n}$ and let $A^*$ be the set of all ground nodes decided into $\dot A$ during the construction. The strictly increasing top heights make $U$ a countable normal $\omega$-splitting tree of nonzero countable limit height. Every node of $U$ occurred at some stage and is comparable with a member of $A^*$. Distinct members of $A^*$ are incomparable: a later common condition forces both into the antichain $\dot A$, and persistence forbids it from forcing two distinct comparable members. Hence $A^*$ is a countable maximal antichain of $U$. Apply F2 to seal $A^*$ with a new top level, yielding a condition $q\le r_0$ and below every decision condition. [F1, F2, F6, F7, F9, A1, step 2.1, step 3.1, step 5.1]

7.1 Persistence gives $q\Vdash A^*\subseteq\dot A$. Every node of $q$ is comparable with $A^*$, and each new top node extends a member of $A^*$ by F2. Consequently every node added by a future end extension extends one of those top nodes and remains comparable with $A^*$; so $q$ forces that $A^*$ is maximal in $\dot T$. Since $q$ also forces that $\dot A$ is an antichain containing the maximal antichain $A^*$, it forces $\dot A=A^*$ and therefore countable. Because $r_0\le p_0$ was arbitrary, such q's are dense below $p_0$, and F9 gives $p_0\Vdash$ “$\dot A$ is countable.” [F2, F9, step 5.1, step 6.1]

8.1 By F12 the extension satisfies ZFC, so F13 extends every antichain of $T_G$ to a maximal one; step 7.1 makes that maximal antichain countable. Thus $T_G$ has no uncountable antichain. If it had a cofinal branch, F15 applied inside the ZFC extension to the splitting $\omega_1$-tree from step 4.1 would produce an uncountable antichain, a contradiction. F14 now identifies $T_G$ as a normal splitting Suslin tree. [F12, F13, F14, F15, step 4.1, step 7.1]

9.1 Steps 2.1, 3.1, and 8.1 prove the closure, preservation, and forced-tree claims. F8 converts the dense local conclusions to the displayed internal forcing assertion; it does not supply or assert a generic over the universe. AC is used exactly through F5 and F6, the recursive choices in steps 3.1 and 6.1, Zorn in step 8.1, and F15. [F5, F6, F8, F12, F13, F15, A1, step 2.1, step 3.1, step 6.1, step 8.1] ∎
