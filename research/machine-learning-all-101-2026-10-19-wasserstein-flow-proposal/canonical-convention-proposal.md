# Surgical P-WGF-02 growth convention proposal

Append after the normative module boundary paragraph (and mirror the single P-WGF-02 scope convention in plan-machine-learning-track.md / plan-spec.json if root accepts):

For the growth estimate only, require at each u in Q_r a supporting potential vector of norm at most C1+C2r; equivalently bound the minimum norm in the relative-domain semiconvex supporting set. The original stronger maximal bound on ambient potential subgradients implies this condition and every original Assumptions2.1 case remains covered. Do not bound the full supporting set after adjoining domain normals. This bounded-selection formulation gives the intended proper-domain extension without assuming any semiconvex extension outside Ω. It is sufficient for every G1–G7 proof: any bounded supporting vector remains admissible after restriction to D⊂Ω, and the full shifted minimum is no larger than its sum with the smooth gradient. This clarifies the boundary convention rather than narrowing any approved claim.

Reason: on Ω=[0,∞),V=0, the relative supporting set at0 is (−∞,0], although the source ambient potential derivative is0. The old carrier equated the two sets and then bounded their maximal norms.
