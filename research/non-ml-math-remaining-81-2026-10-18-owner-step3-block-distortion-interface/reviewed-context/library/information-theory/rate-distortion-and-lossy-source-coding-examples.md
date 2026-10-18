---
page: rate-distortion-and-lossy-source-coding-examples
title: "Rate Distortion and Lossy Source Coding — Examples"
status: draft
requires:
  - rate-distortion-and-lossy-source-coding
items: []
examples:
  - ex-it-binary-hamming-rate-distortion-curve
  - cex-it-continuous-optimal-reconstruction-need-not-have-a-density
  - ex-it-gaussian-distortion-waterline
---

The examples compute a binary Hamming curve and a two-coordinate Gaussian waterline. The counterexample records a zero-rate Gaussian optimizer whose reconstruction is a point mass, with no Lebesgue density. They use the A-page conventions for standard-Borel mutual information, bits, and squared-error distortion.

## Source trail

- **MIT OpenCourseWare 6.441, Chapters 23 and 25** ([Chapter 23](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/880c39878ba7dc35a5fbb35758d42a69_MIT6_441S16_chapter_23.pdf), [Chapter 25](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf)), §§25.1.1 and 25.1.2: Bernoulli/Hamming and Gaussian squared-error formulas.
- **Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed.** ([full text](https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf)), §§10.3.1 and 10.3.3: binary Hamming and Gaussian vector water-filling.
