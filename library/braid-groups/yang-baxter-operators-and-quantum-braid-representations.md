---
page: yang-baxter-operators-and-quantum-braid-representations
title: "Yang–Baxter Operators and Quantum Braid Representations"
status: draft
requires: [braided-and-symmetric-monoidal-categories,
            duality-and-rigidity-in-monoidal-categories,
            tensor-and-fusion-categories,
            modules-and-module-homomorphisms,
            oriented-links-braid-closures-and-markov-equivalence]
items: [def-absolutely-simple-object,
        def-exponent-sum-and-writhe-of-a-braid,
        def-the-framed-oriented-tangle-category,
        def-yang-baxter-operator-on-an-object,
        def-local-yang-baxter-operators-on-tensor-powers,
        lem-framed-oriented-tangles-have-the-ribbon-generator-and-relation-presentation,
        lem-local-yang-baxter-operators-satisfy-the-artin-relations,
        thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor,
        thm-a-yang-baxter-operator-gives-braid-group-representations,
        cor-an-object-of-a-braided-category-carries-canonical-braid-actions,
        prop-an-involutive-yang-baxter-operator-factors-through-the-symmetric-group,
        def-braided-monoidal-functor-induced-intertwiner,
        def-ribbon-evaluation-of-an-x-colored-closed-braid,
        lem-ribbon-trace-equals-the-framed-closure-evaluation,
        thm-braided-functors-intertwine-canonical-braid-actions,
        thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links,
        lem-scalar-twist-controls-the-two-markov-stabilizations,
        thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant]
---

This page develops the categorical source of braid-group representations. A
Yang–Baxter operator on an object $X$ of a monoidal category is an invertible
$R\colon X\otimes X\to X\otimes X$ satisfying the cubic Yang–Baxter equation,
read in a strict model and transported by Mac Lane strictification. The local
operators on tensor powers satisfy the Artin relations, so von Dyck's theorem
produces a homomorphism $B_n\to\operatorname{Aut}(X^{\otimes n})$ for every
$n$, with compatibility under the standard inclusions. In a strict braided
category the braiding itself is the basic example; braided coherence makes the
construction canonical even when associators are not identities, and an
involutive operator factors through the symmetric groups while its two-strand
action factors exactly when $R^2=1$.

The second half connects these representations with the framed graphical
calculus. The framed oriented tangle category is presented by the crossings,
cups, caps and full twists subject to the ribbon relations, and an object of a
ribbon category with its braiding, duality and twist evaluates that category:
there is a unique framed-tangle evaluation functor sending the positive strand
to $X$. Closing a braid and evaluating by the pivotal comparison
$j_X=u_X\theta_X$ recovers the categorical trace. In a $k$-linear ribbon category with $k$-bilinear
tensor product and $\operatorname{End}(\mathbf1)=k$, an absolutely simple
object has scalar twist $\theta_X=\lambda\operatorname{id}_X$. The two
Markov stabilizations multiply its trace by $\lambda^{\pm1}$, so multiplying
by $\lambda^{-w(\beta)}$ yields an invariant of oriented unframed closures.
The framed-tangle presentation assumes countable choice, and this last
invariance statement assumes AC through the stated Markov theorem. Braided functors intertwine the
canonical braid actions, so the whole construction is functorial in the
category.
