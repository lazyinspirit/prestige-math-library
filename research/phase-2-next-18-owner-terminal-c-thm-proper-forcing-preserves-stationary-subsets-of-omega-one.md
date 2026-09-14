# Owner terminal review: `thm-proper-forcing-preserves-stationary-subsets-of-omega-one`

**Decision:** `repaired`.

Terra correctly identified that the old argument selected an arbitrary master condition and never related it to the starting condition $p$.  The proof now applies properness to choose $q\leq p$ that is master for the selected countable model.  The standard trace argument then forces the model cut into the named club, and since the cut lies in the original stationary set, $q$ witnesses the desired density below $p$.

I checked this standard preservation proof against Jech, *Set Theory*, Chapter 31, bibliographic page https://link.springer.com/book/10.1007/3-540-44761-X.  The change supplies exactly the missing order relation and does not strengthen the properness hypothesis.

Exact frozen pre-review item SHA-256: `080acdc73ba484aab74b27761ee80d262bb9391989738043a4b83db774023fb1`.  Current raw item SHA-256: `56a2b4d982a60ed247967a38737d857b0d28396cca5e8fe15f00ef0850c563da`.
