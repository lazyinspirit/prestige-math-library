---
page: nonuniform-fast-fourier-transforms-examples
title: Nonuniform fast fourier transforms — Examples
status: published
requires:
  - nonuniform-fast-fourier-transforms
items: []
examples:
  - ex-nufft-mri-fourier-samples
  - ex-nufft-small-deconvolution-mode-is-inconclusive
  - ex-nufft-clustered-sources-l1-error
---

These examples compute exact samples for a finite two-point MRI object, show how near-canceling clustered sources keep their input l1 norm fixed as one Fourier coefficient becomes small, and verify a finite-format branch where a positive Gaussian multiplier cannot receive a positive dyadic lower bound. The MRI example is a point-source Fourier model only; none of the examples asserts an acquisition or reconstruction result.
