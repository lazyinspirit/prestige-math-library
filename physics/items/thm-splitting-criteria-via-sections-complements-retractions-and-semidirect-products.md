---
id: thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products
kind: theorem
title: "A group extension splits exactly when it has a complement or a compatible semidirect-product model, and a kernel retraction forces a direct product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-retraction-of-the-kernel-in-a-group-extension, thm-splitting-lemma-for-group-extensions, lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base]
proof_strategy: iff
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

For a group extension

$$1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1,$$

the following are equivalent:

1. the extension splits;
2. $i(N)$ has a complement in $E$;
3. the extension is equivalent to the standard extension
   $$1\to N\to N\rtimes Q\to Q\to1$$
   for some action of $Q$ on $N$.

If there exists a retraction $r:E\to N$ of the kernel inclusion $i$, then
$\ker r$ is a complement to $i(N)$, it centralizes $i(N)$, and therefore
$E\cong N\times\ker r$.

## Facts & Assumptions

**Given:** The displayed group extension.

[L1] For a group extension, having a homomorphic section, having a complement to the kernel, and being equivalent to a compatible semidirect-product extension are equivalent ([[thm-splitting-lemma-for-group-extensions]]).

[L2] In a group extension, $i(N)$ is normal in $E$ ([[lem-kernel-subgroup-in-a-group-extension-is-normal-and-the-quotient-is-the-base]]).

## Proof

**Proof technique:** iff.

1.1 By [L1], conditions 1, 2, and 3 are equivalent. [given, L1]

1.2 Suppose $r:E\to N$ is a retraction of $i$. For $x\in i(N)\cap\ker r$, write $x=i(n)$. Then $1=r(x)=r(i(n))=n$, so $x=i(1)=1$. For any $g\in E$, the element $i(r(g))^{-1}g$ lies in $\ker r$ because $$r(i(r(g))^{-1}g)=r(g)^{-1}r(g)=1.$$ Therefore $$g=i(r(g))\bigl(i(r(g))^{-1}g\bigr)\in i(N)\ker r,$$ so $E=i(N)\ker r$ and $\ker r$ is a complement to $i(N)$. [given, algebra]

2.1 Let $k\in\ker r$ and $x=i(n)\in i(N)$. Because $i(N)$ is normal in $E$ by [L2], the conjugate $kxk^{-1}$ still lies in $i(N)$. Applying $r$ gives $$r(kxk^{-1})=r(k)r(x)r(k)^{-1}=n.$$ Since $r$ restricts to the inverse of $i$ on $i(N)$, this forces $kxk^{-1}=i(n)=x$. Hence $\ker r$ centralizes $i(N)$, and step 1.2 upgrades the decomposition to a direct product $E\cong i(N)\times\ker r\cong N\times\ker r$. [L2, step 1.2, algebra]

3.1 Step 1.1 is the splitting criterion, while steps 1.2 and 2.1 show that any kernel retraction forces a direct-product splitting. [step 1.1, step 1.2, step 2.1] ∎
