---
id: thm-cartier-weil-divisors-curves-agree
kind: theorem
title: "Cartier and Weil divisors agree on a smooth curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-dvr-is-a-pid
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-dependent-choice
  - def-divisor-smooth-proper-curve
  - def-integral-scheme
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-locally-factorial-scheme
  - def-picard-group-scheme
  - def-rational-section-line-bundle
  - def-unique-factorisation-domain
  - lem-integral-finite-type-scheme-function-field
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-cartier-to-weil-divisor-normal-scheme
  - thm-cartier-weil-isomorphism-locally-factorial
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - thm-principal-ideal-domains-are-unique-factorisation-domains
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14-31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice together with the Dependent Choice inherited from
the Cartier-to-Weil cycle suppliers. Let $C$ be a smooth proper geometrically
integral curve over a field $k$. Then:

1. the local ring of $C$ at every closed point is a discrete valuation ring,
   hence a principal ideal domain, hence a unique factorisation domain, while
   the local ring at the generic point is a field; consequently $C$ is locally
   factorial;
2. every Weil divisor on $C$ is Cartier, and the Cartier-to-Weil cycle map is
   a well-defined isomorphism
   $\operatorname{CaDiv}(C)\to\operatorname{Div}(C)$ onto the divisor group of
   the curve, compatible with principal divisors;
3. the canonical map
   $\operatorname{CaDiv}(C)/\operatorname{Prin}_C(C)\to\operatorname{Pic}(C)$
   is an isomorphism, so $\operatorname{Pic}(C)$ is isomorphic to the divisor
   class group $\operatorname{Cl}(C)=\operatorname{Div}(C)/\operatorname{Prin}(C)$,
   and every invertible sheaf on $C$ is isomorphic to $\mathcal O_C(D)$ for a
   divisor $D$ that is well defined modulo linear equivalence.

## Facts & Assumptions

**Given:** A field $k$, a smooth proper geometrically integral curve $C$ over $k$ with function field $k(C)$, the Axiom of Choice, and the Dependent Choice ([[def-dependent-choice]]) inherited from the Cartier-to-Weil cycle suppliers of [F4].

[F1] A curve over $k$ is geometrically integral, separated, of finite type and of chain dimension one; the local ring of a smooth curve at a closed point is a discrete valuation ring, while the local ring at the generic point $\eta$ is the function field $k(C)$, a field; $C$ is integral, and Noetherian because a finite-type algebra over the field $k$ is Noetherian. ([[def-algebraic-curve-over-field]], [[thm-local-ring-smooth-curve-dvr]], [[lem-integral-finite-type-scheme-function-field]], [[def-integral-scheme]])

[F2] Every discrete valuation ring is a principal ideal domain, and assuming the Axiom of Choice every principal ideal domain is a unique factorisation domain; a field is a unique factorisation domain, since it has no nonzero nonunit and so has no irreducible factorisation to perform. ([[cor-dvr-is-a-pid]], [[thm-principal-ideal-domains-are-unique-factorisation-domains]], [[def-unique-factorisation-domain]])

[F3] A scheme $X$ is locally factorial when the local ring $\mathcal O_{X,x}$ is a unique factorisation domain for every point $x\in X$. ([[def-locally-factorial-scheme]])

[F4] The current Cartier interfaces define the sheaf and linear-equivalence conventions, identify principal Cartier divisors as the kernel of the Picard map, define the Cartier-to-Weil cycle and its principal-divisor compatibility, and give the Cartier-Weil and Picard-class isomorphisms on locally factorial Noetherian integral schemes. The rational-section theorem identifies a line bundle with the sheaf of its section divisor. These are the current interfaces used in steps 1.2, 3.1 and 4.1; AC supplies DC where the cycle sources require it. ([[def-invertible-sheaf-of-cartier-divisor]], [[def-linear-equivalence-cartier-divisors]], [[thm-cartier-divisors-mod-principal-to-picard]], [[thm-cartier-to-weil-divisor-normal-scheme]], [[thm-cartier-weil-isomorphism-locally-factorial]], [[thm-line-bundle-rational-section-cartier-divisor]])

[F5] Cartier divisors on a scheme form a group $\operatorname{CaDiv}(X)$ with principal Cartier divisors $\operatorname{Prin}_C(X)$ as a subgroup; on the smooth proper curve $C$ the divisor group $\operatorname{Div}(C)$ of [F1] is the free abelian group on the closed points, its element $\operatorname{div}_W(f)$ of a nonzero rational function generates the subgroup $\operatorname{Prin}(C)$, and the quotient $\operatorname{Div}(C)/\operatorname{Prin}(C)=\operatorname{Cl}(C)$ is the divisor class group. ([[def-cartier-divisor]], [[def-divisor-smooth-proper-curve]])

[F6] $\operatorname{Pic}(X)$ is the abelian group of isomorphism classes of invertible $\mathcal O_X$-modules under tensor product with identity $[\mathcal O_X]$; on an integral scheme the sheaf of meromorphic sections of an invertible sheaf $\mathcal L$ is the constant sheaf with value the one-dimensional $K(X)$-vector space $\mathcal L_\eta$, so nonzero rational sections exist. ([[def-picard-group-scheme]], [[def-rational-section-line-bundle]])



## Proof

**Proof technique:** direct; show that all local rings of the curve are UFDs, so that the locally-factorial Cartier-Weil dictionary applies, and then transport the divisor class group to the Picard group with the rational-section theorem.

1.1 The local rings. Let $p$ be a closed point of $C$; by [F1] the local ring $\mathcal O_{C,p}$ is a discrete valuation ring, and by [F2] it is a principal ideal domain, hence a unique factorisation domain. Let $\eta$ be the generic point of the integral scheme $C$; by [F1] its local ring is the function field $k(C)$, a field, hence again a unique factorisation domain by [F2]. These are all the points of the one-dimensional space $C$, so every local ring of $C$ is a unique factorisation domain. [F1, F2]

1.2 Divisors for invertible sheaves. Let $\mathcal L$ be an invertible sheaf on $C$. By [F6] the stalk of $\mathcal L$ at the generic point is a one-dimensional $k(C)$-vector space, so $\mathcal L$ admits a nonzero rational section $s$; by the current interface `thm-line-bundle-rational-section-cartier-divisor` of [F4] there is a Cartier divisor $\operatorname{div}_C(s)$ with $\mathcal O_C(\operatorname{div}_C(s))\cong\mathcal L$, so every invertible sheaf is of the form $\mathcal O_C(D)$ for a divisor $D$. If $\mathcal O_C(D)\cong\mathcal O_C(D')$, then $D-D'$ lies in the kernel of $D\mapsto[\mathcal O_C(D)]$, which is $\operatorname{Prin}_C(C)$ by the current interface `thm-cartier-divisors-mod-principal-to-picard` of [F4], i.e. $D-D'$ is a principal Cartier divisor; by [F4] and [F5] this is linear equivalence, and by the definition `def-linear-equivalence-cartier-divisors` of [F4] the divisor $D$ is well defined modulo linear equivalence, the second half of clause 3. [F4, F5, F6]

2.1 Local factoriality. By step 1.1 every local ring of $C$ is a unique factorisation domain, so the defining condition of [F3] holds and $C$ is locally factorial; the curve is also Noetherian and integral by [F1], which are the structural hypotheses of the current suppliers below. [F1, F3, step 1.1]

3.1 Cartier and Weil divisors agree. By the current interface `thm-cartier-weil-isomorphism-locally-factorial` of [F4], every Weil divisor on the locally factorial Noetherian integral scheme $C$ is locally Cartier, hence Cartier (the Cartier condition is local), and the cycle map is an isomorphism onto the Weil divisor group. The current interface `thm-cartier-to-weil-divisor-normal-scheme` of [F4] supplies the well-definedness of the cycle map $\operatorname{cyc}\colon\operatorname{CaDiv}(C)\to\operatorname{Div}(C)$ and its compatibility $\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$ with principal divisors, so $\operatorname{cyc}$ identifies $\operatorname{CaDiv}(C)$ with $\operatorname{Div}(C)$ and carries linear equivalence to linear equivalence; this is clause 2 of the Statement. [F4, F5, step 2.1]

4.1 The Picard group. By the current interface `thm-cartier-divisors-mod-principal-to-picard` of [F4] the assignment $D\mapsto[\mathcal O_C(D)]$ induces an isomorphism $\operatorname{CaDiv}(C)/\operatorname{Prin}_C(C)\to\operatorname{Pic}(C)$, the curve $C$ being integral by [F1]; by step 3.1 the cycle map identifies the source with $\operatorname{Div}(C)/\operatorname{Prin}(C)=\operatorname{Cl}(C)$, using that $\operatorname{Prin}_C(C)$ maps onto $\operatorname{Prin}(C)$ by the compatibility of the cycle map with principal divisors and [F5]. Composing these isomorphisms gives $\operatorname{Pic}(C)\cong\operatorname{Cl}(C)$, the first half of clause 3. [F4, F5, step 3.1]

5.1 Conclusion. The local rings of $C$ at closed points are discrete valuation rings, hence principal ideal domains and unique factorisation domains, and the local ring at the generic point is a field, so $C$ is locally factorial by steps 1.1 and 2.1, which is clause 1. On the locally factorial Noetherian integral curve the current cycle and class-group interfaces of [F4] identify Cartier with Weil divisors and the Picard group with the divisor class group, by steps 3.1 and 4.1, which is clauses 2 and 3, and every invertible sheaf is $\mathcal O_C(D)$ with $D$ well defined modulo linear equivalence by step 1.2. The Axiom of Choice is used through [F2], and the Dependent Choice assumed in the Statement is used exactly through the two cycle suppliers of [F4]; no other choice principle is invoked. [F2, F4, step 1.1, step 2.1, step 3.1, step 4.1, step 1.2] ∎
