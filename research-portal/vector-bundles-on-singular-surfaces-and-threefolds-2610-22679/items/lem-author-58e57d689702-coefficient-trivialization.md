---
id: lem-author-58e57d689702-coefficient-trivialization
kind: lemma
title: Slice localization and the actual root-of-unity coefficient map
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-qcqs-site
  - def-etale-tate-coefficients
  - def-derived-sections-on-sites
  - prop-etale-cdh-descent
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  def-etale-tate-coefficients: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  prop-etale-cdh-descent: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 15
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. Let $k$ be algebraically closed, $p$ invertible in $k$, and $X/k$ qcqs, with the fixed choice and universe conventions. On $\mathcal C_F$ use the qcqs prime-field cdh site, and on $\mathcal C_F/X$ its induced slice topology. In this item $L^F_{\mathrm{cdh}}=L^{o,F}_{\mathrm{cdh}}$ and $L_{\mathrm{cdh},X}=L^o_{\mathrm{cdh},X}$ mean ordinary covering-family/Čech sheafification of $D(\mathbb Z)$-valued presheaves. With $r_XP(U\to X)=P(U)$, restriction commutes with this localization, including its units:
$$r_XL^{o,F}_{\mathrm{cdh}}P\simeq L^o_{\mathrm{cdh},X}r_XP.$$
Choose a primitive $p$th root $\zeta\in k$. Its pullbacks give a natural coefficient equivalence $r_XB\simeq r_XB_3$, where $B=R\Gamma_{\mathrm{et}}(-,\mathbb Z/p)$ and $B_3=R\Gamma_{\mathrm{et}}(-,\mu_p^{\otimes3})$. Both restricted targets are ordinary local. Consequently, at the terminal slice object $X\to X$, the actual maps $L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B\to B$ and $L^{o,F}_{\mathrm{cdh}}\tau^{\leq3}B_3\to B_3$ correspond under these equivalences. No root over $F$ or equality of ordinary and hypercomplete reflectors on arbitrary inputs is assumed.

## Facts & Assumptions

[A1] Choice and the stated bounds are inherited through the finite-coefficient locality, ordinary slice localization and derived-evaluation suppliers used below. [[math:def-axiom-of-choice]]
**Given:** The stated field, prime, scheme and fixed choice/universe conventions.

**Goal:** Compare ordinary localization units and the actual coefficient maps on the slice.

[F1] [[lem-author-dcdf962edbda-qcqs-site]] fixes the actual site. Its generating Nisnevich and finitely presented abstract blowup covers are stable under base change. Ordinary sheafification is the reflective localization into covering-family/Čech descent objects.

[F2] [[def-etale-tate-coefficients]] gives the primitive-root coefficient isomorphism on every small étale site over $k$. [[def-derived-sections-on-sites]] fixes its derived evaluation.

[F3] [[prop-etale-cdh-descent]] proves hypercomplete and hence ordinary locality of $B$ on the whole prime-field site. Only its ordinary consequence is needed here.

## Proof
1.1 Define $R_XQ(V)=Q(V\times_FX\to X)$. These products remain qcqs. There is an adjunction $r_X\dashv R_X$: a map $r_XP\to Q$ gives $P(V)\to P(V\times_FX)\to Q(V\times_FX\to X)$; conversely a map $P\to R_XQ$ restricts along the graph $U\to U\times_FX$ for every $U\to X$. The projection–graph identities make the constructions inverse, naturally on mapping spaces. [F1, construct, A1]

2.1 Restriction preserves ordinary sheaves because covers and their Čech diagrams over $(U\to X)$ are exactly those over $U$. The functor $R_X$ also preserves them: base change by $X$ carries the generators in [F1], their iterated pullbacks and their Čech diagrams to the same kind of covering diagrams on the slice. For an ordinary local equivalence $v$ and any slice sheaf $Q$, adjunction identifies $\operatorname{Map}(r_Xv,Q)$ with $\operatorname{Map}(v,R_XQ)$, an equivalence. Thus $r_X$ preserves ordinary local equivalences as well as local objects. [F1, step 1.1]

3.1 Restrict $P\to L^{o,F}_{\mathrm{cdh}}P$. By step 2.1 this is a local equivalence into a slice sheaf, so the reflective universal property identifies it with the slice localization unit. The resulting equivalence is natural and respects all maps induced by that unit. Evaluation at $X\to X$ is evaluation of the ambient presheaf at $X$. [F1, step 2.1]

4.1 Pull back $\zeta$ to every scheme over $X$. By [F2] these maps give the actual natural equivalence $r_XB\simeq r_XB_3$. By [F3] and step 2.1, $r_XB$ is ordinary local; its equivalent target $r_XB_3$ is therefore ordinary local too. Truncation, localization and the naturality of the units in step 3.1 now conjugate the two induced maps from localized truncations into those local targets. Evaluate at the terminal object to obtain the claimed actual comparison. [F2, F3, step 2.1, step 3.1] ∎
