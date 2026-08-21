---
id: rem-fundamental-theorem-of-algebra-via-liouville
kind: remark
title: "Agreement of the Liouville and minimum-modulus proofs of the fundamental theorem of algebra"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-fundamental-theorem-of-algebra-liouville-proof, thm-fundamental-theorem-of-algebra-minimum-modulus-proof]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Corollary 4.6"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Corollary 2.3.3"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.4"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Remark

The theorem [[thm-fundamental-theorem-of-algebra-liouville-proof]] applies Liouville's theorem to the reciprocal of a hypothetical zero-free polynomial. The theorem [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]] establishes the same root-existence statement by descending from a positive minimum of the polynomial's modulus. The routes are independent: the Liouville argument does not cite the minimum-modulus theorem, and the minimum-modulus argument does not use Liouville's theorem.
