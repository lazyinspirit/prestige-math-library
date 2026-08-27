---
id: thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects
kind: theorem
title: "Kernel and cokernel are mutually inverse order-preserving correspondences between subobjects and quotient objects"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-subobject-and-quotient-object, thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections, thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence, thm-every-monomorphism-is-the-kernel-of-its-cokernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 2.3"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

Fix an object $A$ in an abelian category. Sending a subobject representative
$m:M\to A$ to its cokernel class $[\operatorname{coker}(m)]$, and sending a
quotient representative $q:A\to Q$ to its kernel class $[\ker(q)]$, defines
mutually inverse order-preserving bijections between the subobjects of $A$ and
the quotient objects of $A$.

## Facts & Assumptions

**Given:** An object $A$ in an abelian category.

[L1] Subobjects and quotient objects are mutual-factorization classes with the
opposite order conventions
([[def-subobject-and-quotient-object]],
[[thm-subobjects-and-quotient-objects-form-oppositely-ordered-collections]]).

[L2] Mutual factorization is the correct representative-independent equality
relation on subobjects and quotient objects
([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

[L3] Every monomorphism is the kernel of its cokernel, and dually every
epimorphism is the cokernel of its kernel
([[thm-every-monomorphism-is-the-kernel-of-its-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Let $m:M\to A$ be monic, let $c_m:A\to Q_m$ be its cokernel, and let $k_m:K_m\to A$ be the kernel of $c_m$. Since $c_m m=0$, the monomorphism $m$ factors through $k_m$. Conversely, [L3] says that $m$ is itself a kernel of $c_m$, so $k_m$ factors through $m$. Thus $[k_m]=[m]$. The dual argument shows that for every epic $q$ one has $[\operatorname{coker}(\ker q)]=[q]$. [L2, L3]

1.2 If $[m]\le[n]$, then $m=n u$ for some $u$. Since $\operatorname{coker}(n)\,n=0$, one has $\operatorname{coker}(n)\,m=0$, so the cokernel universal property of $m$ makes $\operatorname{coker}(n)$ factor through $\operatorname{coker}(m)$. By the quotient-order convention in [L1], this is exactly $[\operatorname{coker}(m)]\le[\operatorname{coker}(n)]$. The kernel assignment preserves the order dually. [L1, L3]

2.1 Step 1.1 proves that the two assignments are mutually inverse on classes, and step 1.2 proves that both preserve the stated orders. So kernel and cokernel are mutually inverse order isomorphisms between subobjects and quotient objects. [step 1.1, step 1.2] ∎
