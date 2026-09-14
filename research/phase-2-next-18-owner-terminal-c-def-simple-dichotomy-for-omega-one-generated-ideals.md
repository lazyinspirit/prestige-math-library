# Owner terminal review: `def-simple-dichotomy-for-omega-one-generated-ideals`

**Decision:** `repaired`.

Terra correctly identified two hidden assumptions in the old normalization.  Closing an $\omega_1$-indexed generator family under finite unions produces at most $\omega_1$ members, not necessarily exactly $\omega_1$, and an arbitrary ideal need not contain countable unions, so the generators cannot in general be made increasing.  The definition now says “at most $\omega_1$,” permits repetitions to pad an enumeration, and explicitly disclaims an increasing sequence.

The resulting almost-containment formulation and inside/outside alternatives agree with the ideal-dichotomy terminology in Uri Abraham, *Three applications of ideal dichotomy*, slides 2–4, https://www.winterschool.eu/files/4-P-Ideal_Dichotomy_III.pdf.  AC is retained only for extracting a countably infinite subset when showing one uncountable set cannot satisfy both alternatives.

Exact frozen pre-review item SHA-256: `c17473388d1e89497cf5a146d7140f10818ad7191defc1a4be7aa8b88a0b97fc`.  Current raw item SHA-256: `0cbc9b57fac80c833385f2b05f2884f8c1c25d59d802c2ff94faff70026c52ef`.
