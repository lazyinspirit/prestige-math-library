# Actual relative π2 witnesses from a proper homotopy product end

This new elementary construction replaces the general noncompact-duality step only when an actual proper homotopy product is supplied. It does not assert an end collar or manifold recognition.

Let Y be a locally compact metrizable space with one end and let C be a connected compact finite complex. Supply proper maps f:Y→C×[0,∞), g:C×[0,∞)→Y and whole proper homotopies gf≈idY and fg≈id. Choose the positive end. Then, inside every prescribed end neighborhood U₀, there are connected end neighborhoods V⊂U⊂U₀ such that

1. π₁(Y,V)=0;
2. π₂(U,V)→π₂(Y,V) is onto.

Here maps of relative homotopy groups include the actual inclusion maps and their base paths. It suffices that the data are defined on a collared manifold end; neighborhoods can then be chosen connected and clean as usual by a proper exhaustion. Compact extra components are discarded. The conclusion is also valid for a product-side end when all supplied maps and homotopies are the given product on that side and the end cuts respect it.

Choose a connected end neighborhood U⊂U₀. Properness and end preservation give t with g(C×[t,∞))⊂U. Put σ(c)=g(c,t) and r=prC∘f. The map σ:C→Y is a homotopy equivalence: it is g composed with the homotopy equivalence C×{t}→C×[0,∞). In particular π₂(U)→π₂(Y) is onto, because σ factors through U.

Choose a deeper connected end neighborhood V⊂U on which f has height at least t and the whole homotopy from idY to gf stays in U. These are genuine tail containments, not time-slice properness assertions: the inverse image of each compact obstruction under a whole proper homotopy is compact, and end preservation excludes the other tail. The homotopy in U from the inclusion V→Y to gf|V can now be followed by

    g(c,s) ↦ g(c,(1−a)s+at),   0≤a≤1,

for (c,s)=f(v). All of this second homotopy lies in g(C×[t,∞))⊂U. Thus the inclusion V→U is homotopic, with its displayed base path, to σ∘r|V.

The homotopy fg≈id implies rσ≈idC. Consequently σ_* and r_* are inverse isomorphisms on π₁(Y) and π₁(C). The map π₁(V)→π₁(U) therefore factors through π₁(Y), via r_* and σ_*. It follows that every loop in V which dies in Y already dies in U. Also a still deeper cross-section g(C×{s}) lies in V and induces an isomorphism onto π₁(Y). Hence π₁(V)→π₁(Y) is onto and π₁(Y,V)=0.

Finally take α∈π₂(Y,V). Its boundary is a loop β in V trivial in Y. The preceding factorization makes β trivial in U, so the exact sequence of (U,V) gives γ∈π₂(U,V) with boundary β. The difference α−image(γ) has zero boundary and is therefore the image of an element η∈π₂(Y). Lift η from π₂(U), using the cross-section σ. Its image in π₂(U,V), added to γ, maps to α. This proves the required surjection. For the standard nonabelian relative π₂ conventions this subtraction takes place after matching the same boundary element and base path; the exact-sequence action formulation gives the identical lift.

Each choice above is one finite tail-containment choice for a prescribed U₀. Cofinal witness packets can be selected independently for a predetermined countable exhaustion by Countable Choice. No infinite sequence of previously chosen whole homeomorphisms, no duality theorem, and no cellular-map approximation is used.
