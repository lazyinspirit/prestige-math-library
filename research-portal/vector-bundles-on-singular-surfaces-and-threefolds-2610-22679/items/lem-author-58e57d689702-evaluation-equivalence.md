---
id: lem-author-58e57d689702-evaluation-equivalence
kind: lemma
title: Cancellation at the required dimension-bounded evaluation objects
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-58e57d689702-topweight-map
  - lem-author-58e57d689702-independent-gamma
  - lem-author-58e57d689702-coefficient-trivialization
  - prop-etale-cdh-descent
  - lem-adjudicate-e4768ff43a65-ordinary-localization-exactness
  - math:thm-canonical-truncations-fit-a-distinguished-triangle
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-58e57d689702-topweight-map: mathematical-premise
  lem-author-58e57d689702-independent-gamma: mathematical-premise
  lem-author-58e57d689702-coefficient-trivialization: mathematical-premise
  prop-etale-cdh-descent: mathematical-premise
  lem-adjudicate-e4768ff43a65-ordinary-localization-exactness: mathematical-premise
  math:thm-canonical-truncations-fit-a-distinguished-triangle: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. Let $k$ be an algebraically closed field, $p$ a prime number invertible in $k$, and $X/k$ a finite-type scheme with $\dim X\leq3$. Use the field, dimension and finite-type conventions of the top-weight comparison. Let $F$ be the prime subfield of $k$ and use its entire qcqs cdh site, with the supplied representative-based evaluation at $X$ and stable derived target $D(\mathbb Z)$. Put $B(T)=R\Gamma(T_{\mathrm{et}},\mathbb Z/p)$, with the constant coefficient sheaf on the small étale site and its actual derived pullbacks. Write $\tau^{\leq3}$ and $\tau^{>3}=\tau^{\geq4}$ for objectwise canonical cohomological truncations, and $L^F_{\mathrm{cdh}}=L^{o,F}_{\mathrm{cdh}}$ for ordinary source sheafification. The actual map induced by truncation and this sheafification adjunction,
$$\epsilon_X:(L^F_{\mathrm{cdh}}\tau^{\leq3}B)(X)\longrightarrow B(X),$$
is an equivalence. Consequently $(L^F_{\mathrm{cdh}}\tau^{>3}B)(X)=0$. The map exists because $B$ is an ordinary cdh sheaf. These conclusions hold without affineness, smoothness or reducedness. Localization remains on the entire qcqs prime-field site, which has objects of unbounded dimension; no global vanishing or global equivalence of the unlocalized truncation map is asserted.

## Facts & Assumptions
**Given:** The algebraically closed field $k$, invertible prime number $p$, finite-type scheme $X/k$ of dimension at most three, Choice and the stated size bounds.

**Goal:** Prove the actual constant-coefficient evaluation equivalence and the vanishing of the localized upper truncation at $X$.

[A1] [[math:def-axiom-of-choice]] and the fixed universe and site-size bounds are inherited through the comparisons, finite-coefficient locality, slice localization and derived evaluation used in both proof steps. Choice is retained for those suppliers' representative and derived constructions.

[F1] [[lem-author-58e57d689702-topweight-map]] supplies the field, dimension, finite-type/qcqs source-domain and prime-field conventions, the stable derived target, and the actual twisted map $\beta_X$ and factorization $\beta_X=\epsilon_X^{(3)}\gamma_X$. It makes $\beta_X$ an equivalence for precisely these $k,X,p$. Here $B_3(T)=R\Gamma(T_{\mathrm{et}},\mu_p^{\otimes3})$ uses the small-étale roots-of-unity sheaf, and $\epsilon_X^{(3)}$ is its truncation-induced localized map.

[F2] [[lem-author-58e57d689702-independent-gamma]] supplies the independent full equivalence $\gamma_X$ into $(L^F_{\mathrm{cdh}}\tau^{\leq3}B_3)(X)$ for the same actual maps.

[F3] [[lem-author-58e57d689702-coefficient-trivialization]] compares $B$ and $B_3$ on the slice over $X$ using a primitive $p$th root in $k$. It commutes slice restriction with ordinary localization including its units and conjugates the two actual truncation-induced maps at $X$.

[F4] [[prop-etale-cdh-descent]] supplies the actual constant-coefficient functor $B$ on this whole site and its ordinary locality: its ordinary sheafification unit $\eta_B:B\to L^F_{\mathrm{cdh}}B$ is an equivalence. Only this ordinary consequence is used.

[F5] [[math:thm-canonical-truncations-fit-a-distinguished-triangle]] supplies the natural canonical truncation triangle; apply it objectwise in degree $3$. Its proof constructs the quotient by the lower truncation and its natural quasi-isomorphism to the upper truncation, fixing the cofiber sequence of the canonical maps. Its upper truncation is $\tau^{\geq4}=\tau^{>3}$, and its first map is the canonical truncation map.

[F6] [[lem-adjudicate-e4768ff43a65-ordinary-localization-exactness]] proves exactness of the ordinary source reflector as an ambient presheaf endofunctor and exactness of evaluation on the supplied site. It also supplies the pointwise cofiber and zero-object conventions. No equality with hypercompletion is used.

## Proof
1.1 The finite-type scheme $X$ is a qcqs evaluation object in [F1], and its invertible prime number $p$ meets all three comparison suppliers' hypotheses. By [F1]–[F2], $\beta_X=\epsilon_X^{(3)}\gamma_X$ with $\beta_X$ and $\gamma_X$ independently equivalences. Composing with the inverse of $\gamma_X$ gives $\epsilon_X^{(3)}=\beta_X\gamma_X^{-1}$, hence an equivalence. By [F3], the slice coefficient equivalence conjugates this actual map to the displayed constant-coefficient $\epsilon_X$. It follows that $\epsilon_X$ is an equivalence for every stated $X$, including nonaffine schemes. The primitive root is used only on that slice; no coefficient trivialization over $F$ is asserted. [given, A1, F1, F2, F3]

2.1 By [F5] and the pointwise convention in [F6], $\tau^{\leq3}B\to B\to\tau^{>3}B$ is a presheaf cofiber sequence. Apply the ordinary source reflector and evaluate at $X$; [F6] gives the cofiber sequence $(L^F_{\mathrm{cdh}}\tau^{\leq3}B)(X)\to(L^F_{\mathrm{cdh}}B)(X)\to(L^F_{\mathrm{cdh}}\tau^{>3}B)(X)$. By [F4], identify the middle object with $B(X)$ using $\eta_B^{-1}$. Naturality of the unit and the sheafification adjunction identify its first map with the actual $\epsilon_X$: before evaluation it is $\eta_B^{-1}L^F_{\mathrm{cdh}}(\tau^{\leq3}B\to B)$, whose composite with the unit on $\tau^{\leq3}B$ is the truncation map. Step 1.1 makes this first arrow an equivalence. Its cofiber is zero, since the pushout of an equivalence along the map to $0$ is $0$. This proves the stated localized upper-truncation vanishing at $X$ without a dimension-bounded site or a global truncation equivalence. [A1, F4, F5, F6, step 1.1] ∎
